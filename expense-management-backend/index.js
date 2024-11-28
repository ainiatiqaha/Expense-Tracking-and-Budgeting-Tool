require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const connectDB = require("./db"); // Adjust the path as per your file structure

const app = express();

// Debugging: Check if JWT_SECRET is loaded correctly (remove in production)
const jwtSecret = process.env.JWT_SECRET;
console.log("JWT_SECRET:", jwtSecret);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 8001; // Use PORT from .env or default to 8001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});