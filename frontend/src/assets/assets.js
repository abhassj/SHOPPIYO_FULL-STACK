
import logo from './Shoppiyo_logo.png' 
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'


// Drinkware & Accessories
import d_img1 from './drinkware/d_img1.png'
import d_img2 from './drinkware/d_img2.png'
import d_img3 from './drinkware/d_img3.png'
import d_img4 from './drinkware/d_img4.png'
import d_img5 from './drinkware/d_img5.png'
import d_img6 from './drinkware/d_img6.png'
import d_img7 from './drinkware/d_img7.png'
import d_img8 from './drinkware/d_img8.png'
import d_img9 from './drinkware/d_img9.png'
import d_img10 from './drinkware/d_img10.png'
import d_img11 from './drinkware/d_img11.png'
import d_img12 from './drinkware/d_img12.png'

// Ambient & Decorative Lighting
import l_img1 from './lighting/l_img1.png'
import l_img2 from './lighting/l_img2.png'
import l_img3 from './lighting/l_img3.png'
import l_img4 from './lighting/l_img4.png'
import l_img5 from './lighting/l_img5.png'
import l_img6 from './lighting/l_img6.png'
import l_img7 from './lighting/l_img7.png'
import l_img8 from './lighting/l_img8.png'
import l_img9 from './lighting/l_img9.png'
import l_img10 from './lighting/l_img10.png'
import l_img11 from './lighting/l_img11.png'
import l_img12 from './lighting/l_img12.png'

// Stationery & Desk Decor
import s_img1 from './stationery/s_img1.png'
import s_img2 from './stationery/s_img2.png'
import s_img3 from './stationery/s_img3.png'
import s_img4 from './stationery/s_img4.png'
import s_img5 from './stationery/s_img5.png'
import s_img6 from './stationery/s_img6.png'
import s_img7 from './stationery/s_img7.png'
import s_img8 from './stationery/s_img8.png'
import s_img9 from './stationery/s_img9.png'
import s_img10 from './stationery/s_img10.png'
import s_img11 from './stationery/s_img11.png'
import s_img12 from './stationery/s_img12.png'

// Home Aesthetic & Decor
import h_img1 from './home_decor/h_img1.png'
import h_img2 from './home_decor/h_img2.png'
import h_img3 from './home_decor/h_img3.png'
import h_img4 from './home_decor/h_img4.png'
import h_img5 from './home_decor/h_img5.png'
import h_img6 from './home_decor/h_img6.png'
import h_img7 from './home_decor/h_img7.png'
import h_img8 from './home_decor/h_img8.png'
import h_img9 from './home_decor/h_img9.png'
import h_img10 from './home_decor/h_img10.png'
import h_img11 from './home_decor/h_img11.png'
import h_img12 from './home_decor/h_img12.png'

// Wellness & Self-Care
import w_img1 from './wellness/w_img1.png'
import w_img2 from './wellness/w_img2.png'
import w_img3 from './wellness/w_img3.png'
import w_img4 from './wellness/w_img4.png'
import w_img5 from './wellness/w_img5.png'
import w_img6 from './wellness/w_img6.png'
import w_img7 from './wellness/w_img7.png'
import w_img8 from './wellness/w_img8.png'
import w_img9 from './wellness/w_img9.png'
import w_img10 from './wellness/w_img10.png'
import w_img11 from './wellness/w_img11.png'
import w_img12 from './wellness/w_img12.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    // --- 1. Drinkware & Accessories (12 Products) ---
    {
        _id: "drinkware_1",
        name: "Stanley-Style Insulated Tumbler",
        description: "A large, insulated tumbler perfect for keeping drinks hot or cold for hours.",
        price: 800,
        image: [d_img1],
        category: "Drinkware & Accessories",
        subCategory: "Tumbler",
        sizes: ["One Size"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "drinkware_2",
        name: "Glass Boba Cup with Bamboo Lid & Straw",
        description: "An eco-friendly glass cup designed for bubble tea, with a natural bamboo lid.",
        price: 550,
        image: [d_img2],
        category: "Drinkware & Accessories",
        subCategory: "Glassware",
        sizes: ["One Size"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "drinkware_3",
        name: "Smart Thermos Bottle with LED Display",
        description: "A high-tech thermos that displays the temperature of your drink.",
        price: 535,
        image: [d_img3],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "drinkware_4",
        name: "Ceramic Mug with Gold Handle",
        description: "An elegant ceramic mug with a luxurious gold handle, perfect for your morning coffee.",
        price: 280,
        image: [d_img4],
        category: "Drinkware & Accessories",
        subCategory: "Mug",
        sizes: ["One Size"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "drinkware_5",
        name: "Double-Walled Glass Tea Infuser Bottle",
        description: "A stylish bottle with a built-in infuser for enjoying loose-leaf tea on the go.",
        price: 299,
        image: [d_img5],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "drinkware_6",
        name: "Marble Print Ceramic Coffee Mug",
        description: "A sophisticated ceramic mug with a beautiful marble print design.",
        price: 700,
        image: [d_img6],
        category: "Drinkware & Accessories",
        subCategory: "Mug",
        sizes: ["One Size"],
        date: 1716623423448,
        bestseller: false
    },
    {
        _id: "drinkware_7",
        name: "Kawaii Cartoon Water Bottle",
        description: "A cute, cartoon-themed bottle that is both fun and functional.",
        price: 180,
        image: [d_img7],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "drinkware_8",
        name: "Frosted Glass Aesthetic Mug",
        description: "A minimalist frosted glass mug with a comfortable handle.",
        price: 400,
        image: [d_img8],
        category: "Drinkware & Accessories",
        subCategory: "Mug",
        sizes: ["One Size"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "drinkware_9",
        name: "Insulated Wine Tumbler",
        description: "Keeps your wine at the perfect temperature, ideal for picnics or parties.",
        price: 99,
        image: [d_img9],
        category: "Drinkware & Accessories",
        subCategory: "Tumbler",
        sizes: ["One Size"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "drinkware_10",
        name: "Gradient Stainless Steel Water Bottle",
        description: "A sleek, stainless steel bottle with a stylish gradient color finish.",
        price: 500,
        image: [d_img10],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "drinkware_11",
        name: "Crystal Infused Water Bottle",
        description: "A unique bottle with a removable crystal insert to infuse your water with positive energy.",
        price: 1000,
        image: [d_img11],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "drinkware_12",
        name: "Motivational Time Marker Bottle",
        description: "A water bottle with time markers to help you stay hydrated throughout the day.",
        price: 250,
        image: [d_img12],
        category: "Drinkware & Accessories",
        subCategory: "Bottle",
        sizes: ["One Size"],
        date: 1716624445448,
        bestseller: false
    },

    // --- 2. Ambient & Decorative Lighting (12 Products) ---
    {
        _id: "lighting_1",
        name: "Moon Lamp (3D Print)",
        description: "A realistic 3D-printed moon lamp with adjustable brightness and a wooden stand.",
        price: 1999,
        image: [l_img1],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716625545448,
        bestseller: true
    },
    {
        _id: "lighting_2",
        name: "Galaxy Projector Lamp",
        description: "Transform any room into a starry galaxy with a nebula and stars.",
        price: 3499,
        image: [l_img2],
        category: "Ambient & Decorative Lighting",
        subCategory: "Projector",
        sizes: ["One Size"],
        date: 1716626645448,
        bestseller: true
    },
    {
        _id: "lighting_3",
        name: "Sunset Projection Lamp",
        description: "Create a warm, aesthetic glow with a lamp that projects a vibrant sunset onto your walls.",
        price: 1400,
        image: [l_img3],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "lighting_4",
        name: "Cloud Ceiling Lamp",
        description: "A unique ceiling lamp that resembles a soft, fluffy cloud for a dreamy look.",
        price: 4999,
        image: [l_img4],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "lighting_5",
        name: "Neon LED Sign",
        description: "A customizable neon sign to add a modern, vibrant touch to any room.",
        price: 2500,
        image: [l_img5],
        category: "Ambient & Decorative Lighting",
        subCategory: "Sign",
        sizes: ["One Size"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "lighting_6",
        name: "Crystal Touch Lamp",
        description: "A touch-activated lamp that refracts light through a crystal pattern.",
        price: 1800,
        image: [l_img6],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "lighting_7",
        name: "Portable Book Folding Lamp",
        description: "A unique lamp that opens and closes like a book, providing a soft, warm glow.",
        price: 1299,
        image: [l_img7],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "lighting_8",
        name: "Rattan Pendant Lamp",
        description: "A beautiful, woven rattan lamp shade that adds a boho-chic vibe to your space.",
        price: 3999,
        image: [l_img8],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "lighting_9",
        name: "Mushroom Night Light",
        description: "An adorable mushroom-shaped night light with a soft, comforting glow.",
        price: 600,
        image: [l_img9],
        category: "Ambient & Decorative Lighting",
        subCategory: "Night Light",
        sizes: ["One Size"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "lighting_10",
        name: "Aurora Borealis Projector",
        description: "A projector that creates the stunning light show of the Northern Lights in your room.",
        price: 4000,
        image: [l_img10],
        category: "Ambient & Decorative Lighting",
        subCategory: "Projector",
        sizes: ["One Size"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "lighting_11",
        name: "LED String Fairy Lights",
        description: "Delicate fairy lights perfect for decorating shelves, walls, or plants.",
        price: 499,
        image: [l_img11],
        category: "Ambient & Decorative Lighting",
        subCategory: "String Lights",
        sizes: ["One Size"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "lighting_12",
        name: "Water Ripple Projection Lamp",
        description: "A unique lamp that projects a soothing, watery ripple effect onto your ceiling.",
        price: 2500,
        image: [l_img12],
        category: "Ambient & Decorative Lighting",
        subCategory: "Lamp",
        sizes: ["One Size"],
        date: 1716637645448,
        bestseller: false
    },

    // --- 3. Stationery & Desk Decor (12 Products) ---
    {
        _id: "stationery_1",
        name: "Leather Journal Notebook",
        description: "A high-quality, leather-bound notebook for your notes, thoughts, and sketches.",
        price: 799,
        image: [s_img1],
        category: "Stationery & Desk Decor",
        subCategory: "Notebook",
        sizes: ["One Size"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "stationery_2",
        name: "Marble Desk Organizer",
        description: "A luxurious desk organizer made with a stylish marble print finish.",
        price: 1499,
        image: [s_img2],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "stationery_3",
        name: "Acrylic Memo Board",
        description: "A modern, minimalist dry-erase board perfect for jotting down reminders.",
        price: 1250,
        image: [s_img3],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "stationery_4",
        name: "Washi Tape Set (20 Designs)",
        description: "A collection of 20 unique washi tapes for journaling, scrapbooking, and decorating.",
        price: 499,
        image: [s_img4],
        category: "Stationery & Desk Decor",
        subCategory: "Stationery",
        sizes: ["One Size"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "stationery_5",
        name: "Cute Sticky Notes Set",
        description: "A set of adorable, cartoon-themed sticky notes to brighten up your work.",
        price: 250,
        image: [s_img5],
        category: "Stationery & Desk Decor",
        subCategory: "Stationery",
        sizes: ["One Size"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "stationery_6",
        name: "Gel Pen Set (12 Colors)",
        description: "A set of smooth-writing gel pens in a variety of vibrant colors.",
        price: 199,
        image: [s_img6],
        category: "Stationery & Desk Decor",
        subCategory: "Stationery",
        sizes: ["One Size"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "stationery_7",
        name: "Minimalist Desk Mat",
        description: "A large, sleek desk mat that protects your surface and enhances your workspace.",
        price: 1699,
        image: [s_img7],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "stationery_8",
        name: "Acrylic Pen & Pencil Holder with Drawer",
        description: "A clear acrylic holder with a small drawer for storing office supplies.",
        price: 999,
        image: [s_img8],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "stationery_9",
        name: "Geometric Metal Bookends",
        description: "A pair of stylish, geometric bookends to keep your books organized.",
        price: 699,
        image: [s_img9],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "stationery_10",
        name: "Mini LED Desk Lamp",
        description: "A compact, modern lamp that provides bright, focused light for your desk.",
        price: 1199,
        image: [s_img10],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "stationery_11",
        name: "Pastel Desk Calendar",
        description: "A chic, minimalist calendar with a beautiful pastel color scheme.",
        price: 699,
        image: [s_img11],
        category: "Stationery & Desk Decor",
        subCategory: "Stationery",
        sizes: ["One Size"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "stationery_12",
        name: "Acrylic Pen Stand with Phone Holder",
        description: "A versatile pen stand that also has a slot to hold your phone.",
        price: 1100,
        image: [s_img12],
        category: "Stationery & Desk Decor",
        subCategory: "Desk Decor",
        sizes: ["One Size"],
        date: 1716650845448,
        bestseller: false
    },

    // --- 4. Home Aesthetic & Decor (12 Products) ---
{
    _id: "home_1",
    name: "Boho Macrame Wall Hanging",
    description: "A beautifully handcrafted macrame piece that adds a bohemian touch to any wall.",
    price: 1899,
    image: [h_img1],
    category: "Home Decor",
    subCategory: "Wall Decor",
    sizes: ["One Size"],
    date: 1716651945448,
    bestseller: false
},
{
    _id: "home_2",
    name: "Nordic Ceramic Flower Vase",
    description: "A simple, elegant ceramic vase with a minimalist Nordic design.",
    price: 1399,
    image: [h_img2],
    category: "Home Decor",
    subCategory: "Vase",
    sizes: ["One Size"],
    date: 1716653045448,
    bestseller: false
},
{
    _id: "home_3",
    name: "Rattan Storage Basket",
    description: "A stylish woven basket perfect for storing blankets, toys, or laundry.",
    price: 2299,
    image: [h_img3],
    category: "Home Decor",
    subCategory: "Storage",
    sizes: ["One Size"],
    date: 1716654145448,
    bestseller: false
},
{
    _id: "home_4",
    name: "Abstract Face Line Art Poster",
    description: "A modern and artistic poster with a simple line art design.",
    price: 999,
    image: [h_img4],
    category: "Home Decor",
    subCategory: "Wall Decor",
    sizes: ["One Size"],
    date: 1716655245448,
    bestseller: false
},
{
    _id: "home_5",
    name: "Pampas Grass Decor",
    description: "Natural pampas grass plumes to add a soft, rustic feel to your decor.",
    price: 1199,
    image: [h_img5],
    category: "Home Decor",
    subCategory: "Floral",
    sizes: ["One Size"],
    date: 1716656345448,
    bestseller: false
},
{
    _id: "home_6",
    name: "Wooden Jewelry Organizer",
    description: "A beautiful organizer made of natural wood to store and display your jewelry.",
    price: 1699,
    image: [h_img6],
    category: "Home Decor",
    subCategory: "Storage",
    sizes: ["One Size"],
    date: 1716657445448,
    bestseller: false
},
{
    _id: "home_7",
    name: "Ceramic Candle Holder",
    description: "A minimalist ceramic holder for your pillar or taper candles.",
    price: 899,
    image: [h_img7],
    category: "Home Decor",
    subCategory: "Accessory",
    sizes: ["One Size"],
    date: 1716658545448,
    bestseller: false
},
{
    _id: "home_8",
    name: "Minimalist Wall Clock",
    description: "A silent, frameless clock with a modern and simple design.",
    price: 1499,
    image: [h_img8],
    category: "Home Decor",
    subCategory: "Wall Decor",
    sizes: ["One Size"],
    date: 1716659645448,
    bestseller: true
},
{
    _id: "home_9",
    name: "Floating Wooden Shelf",
    description: "A set of simple floating shelves that add a clean look to your wall.",
    price: 3199,
    image: [h_img9],
    category: "Home Decor",
    subCategory: "Furniture",
    sizes: ["One Size"],
    date: 1716660745448,
    bestseller: false
},
{
    _id: "home_10",
    name: "Velvet Throw Pillow Covers",
    description: "A pair of soft, luxurious velvet covers to update your throw pillows.",
    price: 799,
    image: [h_img10],
    category: "Home Decor",
    subCategory: "Textiles",
    sizes: ["One Size"],
    date: 1716661845448,
    bestseller: false
},
{
    _id: "home_11",
    name: "Woven Cotton Throw Blanket",
    description: "A cozy and soft blanket with a beautiful woven texture.",
    price: 2899,
    image: [h_img11],
    category: "Home Decor",
    subCategory: "Textiles",
    sizes: ["One Size"],
    date: 1716662945448,
    bestseller: false
},
{
    _id: "home_12",
    name: "Aesthetic Wall Collage Kit",
    description: "A complete kit with dozens of aesthetic photos for a gallery wall.",
    price: 1199,
    image: [h_img12],
    category: "Home Decor",
    subCategory: "Wall Decor",
    sizes: ["One Size"],
    date: 1716664045448,
    bestseller: false
},

    // --- 5. Wellness & Self-Care (12 Products) ---
{
    _id: "wellness_1",
    name: "Scented Soy Candle (Minimalist Jar)",
    description: "A hand-poured soy candle in a minimalist jar, with a relaxing, long-lasting scent.",
    price: 1199,
    image: [w_img1],
    category: "Wellness & Selfcare",
    subCategory: "Aromatherapy",
    sizes: ["One Size"],
    date: 1716665145448,
    bestseller: false
},
{
    _id: "wellness_2",
    name: "Essential Oil Diffuser (Ultrasonic)",
    description: "A modern, ultrasonic diffuser that fills your space with a fine mist of essential oils.",
    price: 1899,
    image: [w_img2],
    category: "Wellness & Selfcare",
    subCategory: "Aromatherapy",
    sizes: ["One Size"],
    date: 1716666245448,
    bestseller: false
},
{
    _id: "wellness_3",
    name: "Jade Roller & Gua Sha Set",
    description: "A set of two skincare tools to massage your face, reduce puffiness, and improve circulation.",
    price: 999,
    image: [w_img3],
    category: "Wellness & Selfcare",
    subCategory: "Skincare",
    sizes: ["One Size"],
    date: 1716667345448,
    bestseller: false
},
{
    _id: "wellness_4",
    name: "Himalayan Salt Lamp",
    description: "A natural crystal salt lamp that purifies the air and provides a calming, warm glow.",
    price: 1499,
    image: [w_img4],
    category: "Wellness & Selfcare",
    subCategory: "Aromatherapy",
    sizes: ["One Size"],
    date: 1716668445448,
    bestseller: false
},
{
    _id: "wellness_5",
    name: "Aromatherapy Shower Steamers",
    description: "Place a steamer in your shower for a spa-like aromatherapy experience.",
    price: 599,
    image: [w_img5],
    category: "Wellness & Selfcare",
    subCategory: "Bath & Body",
    sizes: ["One Size"],
    date: 1716669545448,
    bestseller: false
},
{
    _id: "wellness_6",
    name: "Hair Scalp Massager Brush",
    description: "A gentle brush to massage your scalp, promoting healthy hair growth and relaxation.",
    price: 699,
    image: [w_img6],
    category: "Wellness & Selfcare",
    subCategory: "Self-Care",
    sizes: ["One Size"],
    date: 1716670645448,
    bestseller: false
},
{
    _id: "wellness_7",
    name: "Portable Humidifier (USB)",
    description: "A small, USB-powered humidifier perfect for your desk or nightstand.",
    price: 1399,
    image: [w_img7],
    category: "Wellness & Selfcare",
    subCategory: "Health",
    sizes: ["One Size"],
    date: 1716671745448,
    bestseller: false
},
{
    _id: "wellness_8",
    name: "Silk Sleep Eye Mask",
    description: "An ultra-soft silk mask for a luxurious and uninterrupted night's sleep.",
    price: 899,
    image: [w_img8],
    category: "Wellness & Selfcare",
    subCategory: "Sleep",
    sizes: ["One Size"],
    date: 1716672845448,
    bestseller: false
},
{
    _id: "wellness_9",
    name: "Reusable Gel Eye Patches",
    description: "Cooling gel patches to reduce puffiness and refresh tired eyes.",
    price: 499,
    image: [w_img9],
    category: "Wellness & Selfcare",
    subCategory: "Skincare",
    sizes: ["One Size"],
    date: 1716673945448,
    bestseller: true 
},
{
    _id: "wellness_10",
    name: "Body Dry Brush (Exfoliating)",
    description: "A natural bristle brush for dry brushing, which exfoliates and energizes your skin.",
    price: 799,
    image: [w_img10],
    category: "Wellness & Selfcare",
    subCategory: "Bath & Body",
    sizes: ["One Size"],
    date: 1716675045448,
    bestseller: false
},
{
    _id: "wellness_11",
    name: "Bamboo Bath Tray",
    description: "A sturdy bamboo tray to hold your book, wine, and candles during a relaxing bath.",
    price: 2499,
    image: [w_img11],
    category: "Wellness & Selfcare",
    subCategory: "Bath & Body",
    sizes: ["One Size"],
    date: 1716676145448,
    bestseller: false
},
{
    _id: "wellness_12",
    name: "Minimalist Ceramic Incense Holder",
    description: "A sleek, modern incense holder made from high-quality ceramic.",
    price: 1099,
    image: [w_img12],
    category: "Wellness & Selfcare",
    subCategory: "Aromatherapy",
    sizes: ["One Size"],
    date: 1716677245448,
    bestseller: false
}
];