// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const verifyToken = require("./middleware/verifyToken");

// ✅ Protected route
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the protected dashboard!", user: req.user });
});


const jwt = require("jsonwebtoken");

app.get("/token", (req, res) => {
  const payload = { email: "test@example.com", role: "user" };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});



// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route to add a product
app.post("/add-product", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Route to get products by category
app.get("/products/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.findByCategory(category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
