const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, "../Front-end/Amena")));

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Front-end/Amena/index.html"));
  console.log(path.resolve(__dirname, "../Front-end/Amena/index.html"));

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
