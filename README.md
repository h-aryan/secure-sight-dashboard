# SecureSight CCTV Dashboard

A real-time security monitoring dashboard built with **Next.js 15 App Router**, **Tailwind CSS**, and **Prisma** with **SQLite**. The dashboard features a live incident player, overlay camera thumbnails, and a fully integrated incident management system.

**Live Demo**: [https://secure-sight-dashboard-production.up.railway.app](https://secure-sight-dashboard-production.up.railway.app)

---

## 🚀 Deployment Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/h-aryan/secure-sight-dashboard.git
cd secure-sight-dashboard
```

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL="file:./dev.db"
```

### 🛠️ Push Prisma Schema

```bash
npx prisma migrate dev --name init
```

### ▶️ Run the Development Server

```bash
npm run dev
```

---

## ☁️ Deployment on Railway

### 🌐 Steps

1. Connect the GitHub repository to [Railway](https://railway.app).
2. Add the following environment variable in Railway project settings:

```env
DATABASE_URL="file:./dev.db"
```

3. Set Build & Start commands:

**Build Command:**

```bash
npm install && npx prisma generate
```

**Start Command:**

```bash
npm start
```

4. Deploy! Railway will automatically build and serve the app.

---

## 🧠 Tech Decisions

- **Next.js 15 App Router** for routing and SSR.
- **Tailwind CSS** for UI styling and layout.
- **Prisma ORM** with **SQLite** for a lightweight and fast local DB.
- **App Router Actions** for data fetching and mutations.
- **Railway** for seamless full-stack deployment.

---

## 🔮 If I Had More Time…

- Add authentication (admin login)
- Add real-time camera feed using WebSockets or WebRTC
- Create an analytics panel (incident trends, heatmaps)
- Enhance accessibility and mobile responsiveness
- Add edit/delete incident functionality
- Add toast notifications and better error handling

---


