
# 🎨 Creative Showcase

A **full-stack web application** where artists can upload, manage, and showcase their digital artwork and memories.
The platform provides **secure authentication**, **private dashboards**, **public artist profiles**, and a **modern masonry gallery UI**.

---

## 🚀 Live Demo

* **Frontend (Netlify):**
  👉 [https://creativoo.netlify.app](https://creativoo.netlify.app)

* **Backend (Render):**
  👉 [https://creative-showcase-backend-43.onrender.com](https://creative-showcase-backend-43.onrender.com)

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS (Masonry Layout)
* Netlify (Deployment)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer (Image Upload)
* Render (Deployment)

---

## ✨ Features

* 🔐 User Authentication (Signup / Login)
* 🖼 Upload images with title
* 📂 Private Dashboard for each user
* 🗑 Delete uploaded images (owner only)
* 🌍 Public user profiles (`/profile/:username`)
* 🧱 Responsive masonry gallery layout
* 🎨 Stylish hover effects on images
* 🔒 Secure APIs using JWT
* ☁️ Cloud-hosted database (MongoDB Atlas)

---

## 📁 Project Structure

```
Creative-Showcase/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── creative-showcase-frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   └── App.jsx
    └── package.json
```

---

## 🔗 Application Routes

### Frontend Routes

| Route                | Description                   |
| -------------------- | ----------------------------- |
| `/`                  | Landing page (public gallery) |
| `/login`             | User login                    |
| `/signup`            | User registration             |
| `/dashboard`         | Private user dashboard        |
| `/profile/:username` | Public artist profile         |

### Backend API Routes

| Method | Endpoint                      | Description                 |
| ------ | ----------------------------- | --------------------------- |
| POST   | `/api/auth/register`          | Register user               |
| POST   | `/api/auth/login`             | Login user                  |
| POST   | `/api/images/upload`          | Upload image                |
| GET    | `/api/images`                 | Fetch all images            |
| GET    | `/api/images/my-images`       | Fetch logged-in user images |
| DELETE | `/api/images/:id`             | Delete image                |
| GET    | `/api/users/:username/images` | Public profile images       |

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file locally:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/creative_showcase
JWT_SECRET=your_secret_key
```

> ⚠️ `.env` is **not pushed to GitHub**.
> On Render, these values are added manually in **Environment Variables**.

---

## 🧪 Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd creative-showcase-frontend
npm install
npm run dev
```

---

## 🌍 Deployment

* **Backend:** Deployed on **Render**
* **Database:** **MongoDB Atlas**
* **Frontend:** Deployed on **Netlify**

The backend automatically creates the `uploads/` directory in production to avoid file system errors.

---

## 🔐 Security Highlights

* Passwords are hashed using **bcrypt**
* JWT-based authentication
* Protected routes for upload & delete
* Users can delete **only their own images**

---

## 🧠 Future Improvements

* Cloudinary integration (permanent image storage)
* Likes & comments
* Image edit feature
* Fullscreen image modal
* Dark mode

---

## 👨‍💻 Author

**Your Name**
B.Tech CSE Student
India

---

## 📌 Project Purpose

This project was built as a **full-stack learning project** and demonstrates:

* Frontend + Backend integration
* REST API design
* Authentication & authorization
* Deployment in real cloud environments

---

