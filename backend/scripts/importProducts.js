// backend/scripts/importProducts.js

import "dotenv/config";
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your frontend assets.js
const assetsPath = path.join(
  __dirname,
  "../../frontend/src/assets/assets.js"
);

// ---- STEP 1: Load products[] from assets.js ----
async function loadProductsFromAssets() {
  const file = fs.readFileSync(assetsPath, "utf-8");

  // Grab all PNG imports like: import d_img1 from './drinkware/d_img1.png'
  const importRegex =
    /import\s+(\w+)\s+from\s+['"](.*\.png)['"];?/g;

  const imports = {};
  let match;
  while ((match = importRegex.exec(file)) !== null) {
    const varName = match[1];
    const relPath = match[2]; // e.g. "./drinkware/d_img1.png"
    imports[varName] = relPath;
  }

  // Extract the "export const products = [ ... ];" block
  const start = file.indexOf("export const products");
  if (start === -1) {
    throw new Error('Could not find "export const products" in assets.js');
  }
  const end = file.indexOf("];", start);
  if (end === -1) {
    throw new Error("Could not find end of products array in assets.js");
  }

  const productsSnippet = file.slice(start, end + 2);
  // Turn "export const products" into normal "const products"
  const productsCode = productsSnippet.replace(
    "export const products",
    "const products"
  );

  // Build fake declarations for all imported images
  // e.g. const d_img1 = "./drinkware/d_img1.png";
  const varsDecl = Object.entries(imports)
    .map(([name, rel]) => `const ${name} = "${rel}";`)
    .join("\n");

  // This code will run in a VM sandbox and set globalThis.products
  const fullCode = `
    ${varsDecl}
    ${productsCode}
    globalThis.products = products;
  `;

  const context = { console };
  context.globalThis = context;
  vm.createContext(context);

  const script = new vm.Script(fullCode);
  script.runInContext(context);

  if (!Array.isArray(context.products)) {
    throw new Error("Failed to evaluate products array from assets.js");
  }

  return context.products;
}

// ---- STEP 2: Connect to DB + Cloudinary & import ----
async function main() {
  await connectDB();          // uses MONGODB_URI from .env
  await connectCloudinary();  // uses CLOUDINARY_* from .env

  const products = await loadProductsFromAssets();
  console.log("Loaded products from assets.js:", products.length);

  // OPTIONAL: clear collection first if you want a clean import
  // !! WARNING: this deletes ALL existing products in the DB !!
  // await productModel.deleteMany({});
  // console.log("Cleared existing products collection");

  for (const p of products) {
    // Drop the custom _id like "drinkware_1" so Mongo can create a real ObjectId
    const { _id, ...rest } = p;

    const imageUrls = [];

    // rest.image is like ["./drinkware/d_img1.png", "./drinkware/d_img2.png", ...]
    for (const rel of rest.image) {
      const cleanRel = rel.replace(/^\.\/+/, ""); // remove leading "./"
      const imgPath = path.join(
        __dirname,
        "../../frontend/src/assets",
        cleanRel
      );

      console.log("Uploading image:", imgPath);

      const uploadRes = await cloudinary.uploader.upload(imgPath, {
        folder: "products",
      });

      imageUrls.push(uploadRes.secure_url);
    }

    const doc = new productModel({
      ...rest,
      image: imageUrls, // store Cloudinary URLs
    });

    await doc.save();
    console.log("Saved product:", doc.name);
  }

  console.log("✅ Done importing products");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Import failed:", err);
  process.exit(1);
});
