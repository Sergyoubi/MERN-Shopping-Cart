const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  countInStock: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('product', productSchema); //the collection name will be called "products" im mongo atlas

module.exports = Product;