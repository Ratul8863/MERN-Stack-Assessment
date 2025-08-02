// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: String,
      required: true,
      enum: ["electronics", "clothing", "books", "food", "other"], // Example categories
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// 🔍 Static method to get all items by category
productSchema.statics.findByCategory = function (category) {
  return this.find({ category });
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
