# Business Site Admin Dashboard

This is a Node.js + Express admin dashboard for managing products and services of a small business. Data is stored in MongoDB Atlas, and admin pages are rendered using EJS templates. The site also exposes public API endpoints to retrieve data in JSON format.

---

## Tech Stack

- Node.js
- Express
- MongoDB Atlas (via Mongoose)
- EJS (template engine)
- CSS (custom, with responsive layout)

---

## Features

- Admin dashboard for adding and deleting Products and Services
- Responsive layout and form validation
- Public API routes that return collection data as JSON
---

## Deployed App

 Admin Dashboard 
 API Endpoints:  
- `GET /api/products` → returns all products  
- `GET /api/services` → returns all services  

---

## Run Locally

1. Clone the repo:

git clone https://github.com/your-username/business-admin-dashboard.git
cd business-admin-dashboard
Install dependencies:

npm install
Create a .env file in the root directory:

MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/businessDB
PORT=3000
Start the server:

node app.js
Visit in your browser:
http://localhost:3000/admin/products


2. Depolyed on rendered
Pages deployed on render
https://business-admin-dashboard.onrender.com/admin/products
https://business-admin-dashboard.onrender.com/admin/services

Api with jSon reponses are deployed on 
https://business-admin-dashboard.onrender.com/api/products
https://business-admin-dashboard.onrender.com/api/services

✍️ Author
Saahil Sayed
HTTP5222 – Assignment 