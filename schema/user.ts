import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";

const Product = require("./product");

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  products: Product,
  sales: {
    type: Number,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

user.plugin(mongooseAjvPlugin, { schema: user });

const User = mongoose.model("User", user);

module.exports = User;
