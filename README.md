README - DigitalFix MERN Stack Assessment

This is a full-stack MERN (MongoDB, Express, React, Node) technical assessment project for DigitalFix. 
The frontend is built with Next.js (App Router) + TypeScript + Redux Toolkit + Tailwind CSS, 
and the backend is built using Express.js + Mongoose.

Features Implemented
----------------------
✅ Task 1: Next.js + TypeScript Routing
- Dynamic route: /blog/[slug]
- Fetches mock blog data from local file
- Shows blog content or 404 error if slug not found

✅ Task 2: Redux Toolkit Cart System
- Cart slice with: Add, Remove, Increase, Decrease quantity
- Page: /cart with real-time cart state

✅ Task 3: Mongoose Schema
- Product schema with:
  - Title, Description, Price, Category
  - Validations + timestamps
  - Static method to get products by category

✅ Task 4: JWT-Protected Express Route
- Protected /dashboard route using middleware
- JWT validation using Authorization header
- Token generation via /token route

✅ Bonus Task: Tailwind Dashboard Layout
- Route: /dashboard (Next.js)
- Responsive layout with Sidebar + Topbar + Main Content

How to Run the Project
------------------------
📦 Prerequisites:
- Node.js (v18+ recommended)
- MongoDB Atlas (or local MongoDB)
- Postman or Thunder Client (for API testing)

1. Start the Backend

cd backend
npm install

👉 Create a .env file in backend/ with:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=thisIsASuperSecretKey123

✅ Run the backend:

node index.js

- Test Token: http://localhost:5000/token
- Protected Route: http://localhost:5000/dashboard

2. Start the Frontend

cd frontend
npm install
npm run dev

💻 Available Pages:

Route                 Description
-----                 -----------
/                     Homepage with navigation
/blog/react-hooks     Dynamic blog route
/cart                 Cart system with Redux
/dashboard            Tailwind Dashboard Layout

JWT Testing
------------
1. Visit http://localhost:5000/token and copy the token.
2. Use Postman or Thunder Client to GET /dashboard with header:

Authorization: Bearer <your_token>

Folder Structure
-----------------
digitalfix-assessment/
├── backend/        → Express.js + Mongoose API
├── frontend/       → Next.js App Router (TS + Redux + Tailwind)

Notes
------
- Clean code with comments and modular structure
- Tailwind used for responsive UI
- Token-based route protection implemented


🙌 Thank You!
This project was built with ❤️ as part of the DigitalFix hiring process.

