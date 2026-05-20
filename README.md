# Vue Blog App

A modern blog application built with Vue 3, TypeScript, and Tailwind CSS. 
Features client-side routing, lazy loading, error handling, and live API integration.

## ✨ Features

- 📄 Browse a list of blog posts fetched from a live API
- 🔍 View full post details on a dedicated page
- ⚡ Lazy loaded routes for faster initial load
- 💀 Error Boundary to handle unexpected crashes gracefully
- ⏳ Suspense for smooth loading states
- 🚫 Custom 404 page for unknown routes
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Vue 3** — Composition API with script setup
- **TypeScript** — fully typed components and interfaces
- **Vue Router 4** — client-side routing with lazy loading
- **Tailwind CSS v3** — utility-first styling
- **Vite** — lightning fast build tool

## 📁 Project Structure

src/
├── components/
│   ├── PostCard.vue       # Reusable post card component
│   └── ErrorBoundary.vue  # Global error catching component
├── views/
│   ├── HomePage.vue       # Lists all blog posts
│   ├── DetailPage.vue     # Single post detail view
│   └── NotFoundPage.vue   # 404 fallback page
├── router/
│   └── index.ts           # Route definitions with lazy loading
├── types.ts               # TypeScript interfaces
└── App.vue                # Root component with Suspense

## 🔌 API

Data is fetched from [api.oluwasetemi.dev](https://api.oluwasetemi.dev)

- `GET /posts` — returns all blog posts
- `GET /posts/:id` — returns a single post by ID

## 💻 Run Locally

**Prerequisites:** Node.js v18+

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This generates a `dist/` folder ready for deployment.

## 📄 License
MIT