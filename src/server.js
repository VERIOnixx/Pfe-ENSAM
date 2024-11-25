const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // To parse JSON requests

// Database Connection using promises
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "Pfe",
}).promise(); // This ensures queries return promises

// API Endpoint to Get Users
app.get("/api/users", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM users");
    res.json(results); // Send results back as JSON
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users from database" });
  }
});

// API Endpoint to Add Users
app.post("/api/users", async (req, res) => {
    const { name, email, phone, company } = req.body;
    try {
      console.log("Received user data:", req.body); // Log the incoming data for debugging
      
      const [result] = await db.execute(
        "INSERT INTO users (name, email, phone, company) VALUES (?, ?, ?, ?)",
        [name, email, phone, company]
      );
  
      console.log("Insert result:", result); // Log the result of the insert query
  
      res.status(201).json({ id: result.insertId, name, email, phone, company });
    } catch (error) {
      console.error("Error adding user:", error); // Log detailed error message
      res.status(500).json({ message: "Error adding user to the database" });
    }
  });

  
  
  
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
