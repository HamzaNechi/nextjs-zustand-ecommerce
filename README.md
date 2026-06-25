# Next.js E-Commerce Learning Project

A modern e-commerce frontend application built for learning and practicing professional Next.js architecture.

## 🚀 Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- Zustand (State Management)
- Axios
- Tailwind CSS
- Fake Store API
- JSONPlaceholder

---

## 📚 Learning Objectives

This project was created to practice:

- Next.js App Router
- Dynamic Routing
- Component-based architecture
- Zustand global state management
- API service layer
- TypeScript best practices
- Authentication flow
- Shopping cart logic
- Admin dashboard structure
- Responsive UI design

---

## 📁 Project Structure

```text
app/
│
├── (auth)/
│   └── login/
│
├── (shop)/
│
├── product/
│   └── [id]/
│
├── cart/
├── checkout/
├── admin/
│
components/
│
├── products/
├── cart/
├── admin/
├── layout/
│
hooks/
│
services/
│
store/
│
types/
│
lib/
```

---

## ✨ Features

### Shop

- Product listing
- Product details page
- Dynamic routing
- Product cards

### Cart

- Add product to cart
- Remove product
- Increase quantity
- Decrease quantity
- Cart persistence using localStorage
- Order summary

### Authentication

- Fake login system
- Zustand authentication store
- Persistent login session

### Admin Dashboard

- Protected pages
- Dashboard statistics
- Products management view
- Users management view

---

## 🧠 Architecture Overview

```text
Pages
  ↓
Components
  ↓
Hooks
  ↓
Services
  ↓
Axios API Client
  ↓
External API
```

### State Management

```text
Zustand
│
├── authStore
└── cartStore
```

### Data Flow

```text
User Action
    ↓
Component
    ↓
Store / Hook
    ↓
Service
    ↓
API
```

---

## 🛠 Installation

Clone the repository:

```bash
git clone git@github.com:your-username/nextjs-zustand-ecommerce.git
```

Go to the project:

```bash
cd nextjs-zustand-ecommerce
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 APIs Used

### Fake Store API

https://fakestoreapi.com

Used for:

- Products
- Categories
- Product Details

### JSONPlaceholder

https://jsonplaceholder.typicode.com

Used for:

- Fake users
- Authentication simulation

---

## 🎯 Future Improvements

- Node.js + Express backend
- MySQL database
- JWT Authentication
- Product CRUD
- Category management
- Stripe payments
- Order management
- Product search
- Product filters
- Wishlist
- Docker deployment

---

## 👨‍💻 Author

Hamza Nechi-Software Engineer
nechihamza114@gmail.com - +21652907678

- Flutter
- Laravel
- Node.js
- Next.js
- IoT & Telemedicine Solutions

---

## 📄 License

This project is created for learning purposes.