const express = require("express");
const app = express();

// Importing the function to connect to the database
const DB = require("./database").connectDB;

// Connecting to the database
DB();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
