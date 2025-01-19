import bodyParser from "body-parser";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// Serve static files from the "Front-end" directory
app.use(express.static(path.join(__dirname, "../../Front-end")));

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file for the root route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../Front-end/Amena/index.html"));
});

// Handle login POST request
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login successful");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});