require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");

const User = require("./src/models/User.js");
const authRoutes = require("./src/routes/authRoutes.js");

const pageRoutes = require("./src/routes/pageRoutes.js");


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("server is running");
});
app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
