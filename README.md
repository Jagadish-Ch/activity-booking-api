# Activity Booking App - Backend API

This project supports user authentication, activity listing, booking functionality, and personal booking history — built using **Node.js**, **Express**, **MongoDB**, and **JWT**.

---

## Features

- User Registration & Login with secure password hashing
- JWT-based authentication for protected routes
- Public access to activity listings
- Authenticated booking of activities
- View user's booked activities
- Input validation using `express-validator`
- Clean and modular project structure

---

## Technology Stack

| Layer         | Tech                  |
|---------------|-----------------------|
| Runtime       | Node.js               |
| Web Framework | Express.js            |
| Database      | MongoDB        |
| Auth          | JWT, bcrypt           |
| Validation    | express-validator     |
| Testing Tool  | Postman / Talend API Tester |

---

## Folder Structure

```
activity-booking-app/
├── controllers/        # Route logic
├── models/             # Mongoose schemas
├── routes/             # API routes
├── middlewares/        # JWT auth middleware
├── config/             # MongoDB config
├── .env                # Environment variables
├── server.js           # Entry point
├── README.md           # Documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Jagadish-Ch/activity-booking-api.git
cd activity-booking-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root with the following values:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

Replace `<username>`, `<password>`, `<cluster>`, and `<dbname>` with your MongoDB Atlas details.

### 4. Run the Server

```bash
npm run dev
```
Server will start at: `http://localhost:5000`

---

## API Endpoints

### Auth Routes

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive JWT token

### Public Routes

- `GET /api/activities` – List all available activities

### Protected Routes (JWT Required)

Set Header: `Authorization: Bearer <token>`

- `POST /api/bookings/book` – Book an activity (requires `activityId`)
- `GET /api/bookings/my-bookings` – View your activity bookings

---

## Sample Payloads

### Register

```json
{
  "name": "Jagadish",
  "email": "jagadish@gmail.com",
  "phone": "1234567890",
  "password": "securePass123"
}
```

### Login

```json
{
  "email": "jagadish@gmail.com",
  "password": "securePass123"
}
```

### Book Activity

```json
{
  "activityId": "your_activity_id_in_DB"
}
```

---

## Testing the API

- Use **Postman** or **Talend API Tester**
- Import the provided Postman collection (activity-booking-api.postman_collection.json)
- Test endpoints in the order: Register → Login → Book Activity → Get My Bookings

---

## Optional Hosting

Deploy this backend using any of the following platforms:
- [Render](https://render.com)
- [Cyclic](https://cyclic.sh)
- [Railway](https://railway.app/)

---

## Contact

For any queries, reach out via the contact information provided in the internship assignment email.