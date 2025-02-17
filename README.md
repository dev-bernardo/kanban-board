# Kanban Board

A full-stack Kanban board built with **Next.js, TypeScript, Prisma, and PostgreSQL**.  
Designed for managing tasks with a modern UI and drag-and-drop support.

## 🚀 Features
- Task management with a Kanban-style interface
- Drag & Drop functionality
- PostgreSQL database with Prisma ORM
- API routes for dynamic updates

## 📦 Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Prisma, PostgreSQL
- **State Management:** React (Zustand / Context API)

## 📖 Setup Instructions
```sh
# 1️⃣ Clone the repo
git clone https://github.com/your-username/kanban-board.git
cd kanban-board

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure `.env` and start the database
npx prisma migrate dev --name init

# 4️⃣ Run the development server
npm run dev

# 5️⃣ Open your browser and visit
http://localhost:3000
