// const bcrypt = require('bcrypt');

// app.use(express.urlencoded({ extended: true })); // To parse form-encoded data
// app.use(express.json()); // To parse JSON data


// // Route to handle user registration
// app.post('/register', async (req, res) => {
//   const { email, username, password } = req.body;

//   // Check if the required fields are provided
//   if (!email || !username || !password) {
//     return res.status(400).json({ error: 'Please provide all required fields' });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user data into the Customer table
//     const sql = 'INSERT INTO Customer (email, username, password, card_details) VALUES (?, ?, ?, ?)';
//     const cardDetailsPlaceholder = 0; // Replace this with actual card details if available
//     db.query(sql, [email, username, hashedPassword, cardDetailsPlaceholder], (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.status(500).json({ error: 'Database error' });
//       }

//       // Successfully inserted
//       res.status(201).json({ message: 'User registered successfully' });
//     });
//   } catch (err) {
//     console.error('Error processing request:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

