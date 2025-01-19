const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files (for Pictures and Icons)
// Middleware to serve static files (CSS, JS)

app.use(express.static(path.join(__dirname, "../../Front-end/Amena")));
app.use(express.static(path.join(__dirname, "../../Front-end/Kyle")));

app.use(express.static(path.join(__dirname, "../../Front-end/Ewing")));
app.use(express.static(path.join(__dirname, "../../Front-end/Karthik")));
app.use(express.static(path.join(__dirname, "../../Front-end/Abinash")));

// Route to serve the HTML file
app.get("/index.html", (req, res) => {
  
  res.sendFile(path.resolve(__dirname, "../../Front-end/Amena"));
});

app.use(express.static(path.join(__dirname, "../../Front-end")));



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

// Start the server
app.get("/Karthik/delivery.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Karthik/delivery.html"));
});
app.get("/Abinash/Communication", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Abinash/Communication.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});