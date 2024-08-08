# Story Creator Backend

This is the backend for the Story Creator app, handling user registration, login, story creation, and retrieval.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (Atlas or local instance)
- Postman or similar API testing tool

## Installation

1. **Clone the repository:**
   git clone <repository-url>
   cd story-creator-backend

2. **Install dependencies:**     npm install
 
## Configuration
1. **Create a .env file in the root directory:**
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
2. **Ensure your MongoDB instance is running and accessible.**
   
   
## Running the Server
1. **Start the server:**         npm start
2. **Access the server at http://localhost:8080.**

## API Endpoints
1. **Register a User**
   - POST /api/auth/register
   - **Body:**
     {
       "username": "testuser",
       "email": "test@example.com",
       "password": "password123"
     }

2. **Login a User**
   - POST /api/auth/login
   - **Body:**
    json
     {
       "email": "test@example.com",
       "password": "password123"
     }
3. **Get Current User Info**
   - GET /api/auth/me
   - **Headers:**
    json
     {
       "Authorization": "Bearer YOUR_TOKEN"
     }
4. **Create a Story**
   - POST /api/stories
   - **Headers:**
     json
     {
       "Authorization": "Bearer YOUR_TOKEN"
     }
   - **Body:**
    json
     {
       "title": "My First Story",
       "content": "This is the content of my first story."
     }
5. **Get All Stories**
   - GET /api/stories
   - **Headers:**
     json
     {
       "Authorization": "Bearer YOUR_TOKEN"
     }
6. **Get a Specific Story**
   - GET /api/stories/:storyId
   - **Headers:**
     json
     {
       "Authorization": "Bearer YOUR_TOKEN"
     }
## Testing the API

1. **Postman:** Import the API endpoints or manually test them using the provided examples.
2. **URL:** Example to register a user:
    http://localhost:8080/api/auth/register 

## Common Issues & Troubleshooting

- **MongoDB Connection Issues:**
  - Ensure your IP address is whitelisted in MongoDB Atlas. ( somethime mogo requir static IP address)
  - Double-check your MONGO_URI  in the .env file.

- **JWT Authentication Issues:**
  - Verify the JWT_SECRET  in your .env file is correct and consistent.