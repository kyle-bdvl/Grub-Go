import express from 'express';
import path from 'path';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = 3000;

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Static file middleware
app.use(express.static(path.join(__dirname, "../../Front-end")));
app.use(express.static(path.join(__dirname, "../../Front-end/Amena")));
app.use(express.static(path.join(__dirname, "../../Front-end/Kyle")));
app.use(express.static(path.join(__dirname, "../../Front-end/Ewing")));
app.use(express.static(path.join(__dirname, "../../Front-end/Karthik")));
app.use(express.static(path.join(__dirname, "../../Front-end/Abinash")));

// MySQL Connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ewingUPM@201',
  database: 'grub_n_go',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Register route
app.post('/api/register', async (req, res) => {
    const { email, username, password } = req.body;

    // Validate if the necessary fields are provided
    if (!email || !username || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {

        // Check if the username or email already exists
        const [existingUser] = await db.query('SELECT * FROM Customer WHERE email = ? OR username = ?', [email, username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Email or username already exists' });
        }

        // Insert new user into the database
        const query = `INSERT INTO Customer (email, username, password) VALUES (?, ?, ?)`;
        await db.query(query, [email, username, password]);

        // Send success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve HTML files (Front-end)
app.get("/index.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Amena"));
});

app.get("/Kyle/restaurant.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Kyle/restaurant.html"));
});

app.get("/Kyle/mealPage.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Kyle/mealPage.html"));
});

app.get("/Ewing/cart.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Ewing/cart.html"));
});

app.get("/Ewing/payment.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Ewing/payment.html"));
});

app.get("/Karthik/delivery.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Karthik/delivery.html"));
});

app.get("/Abinash/Communication", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Abinash/Communication.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
