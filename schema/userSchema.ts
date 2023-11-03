import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";
import ProductSchema from "./productSchema";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "ProductSchema",
    },
  ],
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

userSchema.plugin(mongooseAjvPlugin, { schema: userSchema });

const UserSchema = mongoose.model("UserSchema", userSchema);

export default UserSchema;
