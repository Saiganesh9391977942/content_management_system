require('dotenv').config();
const express = require("express");
const cors = require("cors");
const coonectDB = require("./src/config/db.js");

coonectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("server is running ");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

