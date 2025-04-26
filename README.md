Full Stack Application - React + Spring Boot + MongoDB
This project is a full stack web application built with:

Spring Boot (Backend) for API development.

MongoDB for database management.

React (Frontend) based on a provided Figma design, including form validation and private routes.

🛠️ Technologies Used
Backend:

Java 17+

Spring Boot

Spring Data MongoDB

Maven

Frontend:

React (with Vite / CRA)

React Router

Axios

Formik + Yup (for form validation)

TailwindCSS or CSS modules (optional styling)

Database:

MongoDB Atlas (Cloud) or Local MongoDB

📂 Project Structure
css
Copy
Edit
backend/
 ├── src/
 │    ├── main/
 │    │    ├── java/com/example/backend/
 │    │    │    ├── controller/
 │    │    │    ├── model/
 │    │    │    ├── repository/
 │    │    │    ├── service/
 |    |    |    |── config/
 │    │    └── resources/
 │    │         ├── application.properties
 │    └── test/
frontend/
 ├── src/
 │    ├── components/
 │    ├── images/
 │    ├── services/
 │    └── App.js
🔥 Backend Setup (Spring Boot)
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/your-repo.git
cd backend
Configure application.properties
Add MongoDB connection details:

properties
Copy
Edit
spring.data.mongodb.uri=mongodb+srv://rosan:Rosan%40123@kafb1ev.mongodb.net/EmployeeDetail?retryWrites=true&w=majority&authSource=admin
server.port=8081
Run the Application

bash
Copy
Edit
./mvnw spring-boot:run
The API will be available at: http://localhost:8081/employee

⚡ Frontend Setup (React)
Navigate to frontend folder

bash
Copy
Edit
cd frontend
Install dependencies

bash
Copy
Edit
npm install
Run the React App

bash
Copy
Edit
npm run dev
The React app will be available at: http://localhost:3000

✅ Features
Backend:

CRUD Operations (Create, Read, Update, Delete)

MongoDB Integration

RESTful API

Frontend:

User Authentication (Login, Register)

Form Validation (using Yup)

Private Routes (protected pages after login)

Axios for API calls

Responsive design matching Figma UI

✨ Extra Notes
Ensure MongoDB is running if using a local server (localhost:27017).

CORS settings are enabled in the backend for React frontend access.

Protected routes automatically redirect unauthenticated users to login.
