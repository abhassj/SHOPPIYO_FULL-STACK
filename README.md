⭐ SHOPPIYO – Dropshipping E-Commerce Platform 
Live Project deployed on Render.com

Shoppiyo is a fully functional full-stack Dropshipping e-commerce platform with an integrated Admin Dashboard, secure Authentication, Product & Order Management, and a responsive User Frontend.
This project was originally built locally and successfully deployed across three separate Render services (Frontend, Admin, Backend).

🚀 Live URLs
Service	URL
🛒 Frontend	https://shoppiyo-full-stack-frontend.onrender.com

🛠️ Admin Dashboard	https://shoppiyo-full-stack-admin.onrender.com

⚙️ Backend API	https://shoppiyo-full-stack-backend-jg43.onrender.com

🧰 Tech Stack

Frontend (User App & Admin Panel)
-React.js
-React Router
-Context API / Redux (if applicable)
-Axios
-TailwindCSS / CSS

Backend
-Node.js
-Express.js
-MongoDB (Mongoose)
-JWT Authentication
-Bcrypt
-Cloudinary for Images
-CORS
-dotenv

Deployment
-Render.com (Frontend, Admin, Backend)
-MongoDB Atlas
-Cloudinary

📦 Features
⭐ User Frontend

Product browsing

Product details

Add to Cart

Checkout Flow

User Authentication (Login / Register)

Responsive UI

⭐ Admin Dashboard

Login authentication

Add / Update / Delete products

Manage orders

View users

Image upload with Cloudinary

⭐ Backend API

RESTful API built using Express

JWT-based authentication

MongoDB Models for Users, Products, Orders

Centralized error handling

Secure password hashing

🏗️ Folder Structure Overview
root/
 ├── backend/
 ├── frontend/
 ├── admin/
 └── README.md


Each service runs independently and is deployed separately on Render.

🔧 Environment Variables
Backend (.env)
PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

Frontend & Admin
REACT_APP_API_URL=https://shoppiyo-full-stack-backend-jg43.onrender.com

🚀 Deployment Guide (Render.com)
Backend

Create new Render Web Service → Upload backend folder

Add environment variables

Set build command: npm install

Start command: npm start

Frontend / Admin

Create Render Static Site

Build command: npm install && npm run build

Publish the build/ directory

Replace all API URLs with the backend’s Render URL

📡 API Base URL
https://shoppiyo-full-stack-backend-jg43.onrender.com

🧪 Testing
Run backend locally:
npm install
npm start

Run frontend/admin locally:
npm install
npm start

🛡️ Security

Password hashing using bcrypt

Encrypted JWT tokens

CORS protection

Environment variable secured config

🙌 Author
Abhas Ajay Jaltare 
GitHub: github.com/abhassj
LinkedIn: linkedin.com/in/abhas-ajay-jaltare-3b36bb20a

📄 License

This project is open-source for educational and portfolio use.
