# 🛍️ SHOPPIYO – Dropshipping E-Commerce Platform

![Deployment Status](https://img.shields.io/badge/Deployment-Live-brightgreen?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

> **Shoppiyo** is a fully functional, full-stack Dropshipping e-commerce platform designed for scalability and performance. It features a robust **User Frontend**, a powerful **Admin Dashboard**, and a secure **Backend API**. This project was originally built locally and successfully deployed across three separate Render services.

---

## 🚀 Live Demo

| Service | URL | Status |
| :--- | :--- | :--- |
| **🛒 Frontend** | [Visit Store](https://shoppiyo-full-stack-frontend.onrender.com) | 🟢 Live |
| **🛠️ Admin Panel** | [Access Dashboard](https://shoppiyo-full-stack-admin.onrender.com) | 🟢 Live |
| **⚙️ Backend API** | [View API](https://shoppiyo-full-stack-backend-jg43.onrender.com) | 🟢 Live |

---

## 🛠️ Tech Stack

### Frontend (User App & Admin Panel)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Deployment & Tools
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

---

## 📦 Key Features

### 👤 User Frontend
- **Product Browsing**: Seamless navigation through product catalogs.
- **Product Details**: Comprehensive view of product specifications.
- **Add to Cart**: Real-time shopping cart functionality.
- **Checkout Flow**: Integrated and secure checkout process.
- **Authentication**: Secure Login/Register for users.
- **Responsive UI**: Fully optimized for both Mobile and Desktop experiences.

### 🛡️ Admin Dashboard
- **Secure Authentication**: Admin-only access protection.
- **Product Management**: Add, Update, and Delete products effortlessly.
- **Order Management**: Track and manage customer orders efficiently.
- **User Management**: View and monitor registered users.
- **Image Uploads**: Seamless Cloudinary integration for product images.

### 🔌 Backend API
- **RESTful Architecture**: Scalable and maintainable API design.
- **Security**: JWT-based authentication and Bcrypt password hashing.
- **Data Integrity**: Robust MongoDB models for Users, Products, and Orders.
- **Error Handling**: Centralized error management for stability.

---

## 🏗️ Folder Structure Overview

```
root/
├── backend/   # Node.js & Express API
├── frontend/  # React User Application
├── admin/     # React Admin Dashboard
└── README.md  # Project Documentation
```

Each service runs independently and is deployed separately on Render.

---

## 🔧 Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env` file in the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

For **Frontend** and **Admin**, create a `.env` file referencing the backend:
```env
REACT_APP_API_URL=https://shoppiyo-full-stack-backend-jg43.onrender.com
# Or http://localhost:5000 if running backend locally
```

---

## 🚀 Deployment Guide (Render.com)

### Backend
1. Create new **Render Web Service** → Upload `backend` folder.
2. Add environment variables.
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `npm start`

### Frontend / Admin
1. Create **Render Static Site**.
2. Set **Build Command**: `npm install && npm run build`
3. Set **Publish Directory**: `build/`
4. Replace API URLs with the backend’s live Render URL.

---

## 🧪 Local Setup & Testing

### 1. Backend
```bash
cd backend
npm install
npm start
```

### 2. Frontend / Admin
```bash
cd frontend  # or cd admin
npm install
npm start
```

---

## 🛡️ Security Measures
- **Password Hashing**: Bcrypt for securing user passwords.
- **Authentication**: Encrypted JWT tokens for session management.
- **CORS Policy**: Configured Cross-Origin Resource Sharing.
- **Config**: Environment variable secured configuration.

---

## 🙌 Author

**Abhas Ajay Jaltare**

[![GitHub](https://img.shields.io/badge/GitHub-abhassj-181717?style=for-the-badge&logo=github)](https://github.com/abhassj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhas_Jaltare-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abhas-ajay-jaltare-3b36bb20a)

---

## 📄 License

This project is open-source and available for educational and portfolio use.
