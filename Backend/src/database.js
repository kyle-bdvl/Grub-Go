// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;
// // Middleware
// app.use(bodyParser.json());
// // MySQL Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'ewingUPM@201',
//   database: 'grub_n_go'
// });
// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as ID ' + db.threadId);
// });


// app.post('/register', async (req, res) => {
//   const { email, username, password } = req.body;

//   if (!email || !username || !password) {
//     return res.status(400).json({ error: 'Please provide all required fields' });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // SQL query
//     const sql = 'INSERT INTO Customer (email, username, password, card_details) VALUES (?, ?, ?, ?)';
//     const cardDetailsPlaceholder = 0; // Placeholder for `card_details`

//     // Perform the query
//     db.query(sql, [email, username, hashedPassword, cardDetailsPlaceholder], (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.status(500).json({ error: 'Database error' });
//       }

//       // Success
//       res.status(201).json({ message: 'User registered successfully', customerId: result.insertId });
//     });
//   } catch (err) {
//     console.error('Error processing request:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


