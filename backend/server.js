const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ===============================
// Connect MongoDB
connectDB();

// ===============================
// Middleware
app.use(cors());
app.use(express.json());

// API Routes
// ===============================
app.use("/api/contact", contactRoutes);
app.use("/api/users", userRoutes);


// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Smart Agriculture Backend Running...");
});


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});