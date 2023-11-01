import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";

const User = require("./user");

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: { Array, required: true },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
  categories: {
    type: Array,
  },
  reviews: Array,
  ratings: Number,
  seller: User,
});

product.plugin(mongooseAjvPlugin, { schema: product });

const Product = mongoose.model("Product", product);

module.exports = Product;
