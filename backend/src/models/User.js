require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

// Import the User model you just created
const User = require("./src/models/User.js");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
    res.send("server is running");
});

// TEST ROUTE: Create a dummy user in the database
app.post('/api/test-user', async (req, res) => {
    try {
        const newUser = await User.create({
            username: "admin123",
            email: "admin@test.com",
            password: "password123" // In a real app, this will be hashed!
        });
        res.status(201).json({ message: "Model is working! User created.", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
