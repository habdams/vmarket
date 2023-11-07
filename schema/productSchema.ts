import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";
import ImageSchema from "./imageSchema";
import UserSchema from "./userSchema";
import ReviewSchema from "./reviewSchema";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "ImageSchema",
    },
  ],
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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: ReviewSchema,
    },
  ],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "UserSchema",
    required: true,
  },
});

productSchema.plugin(mongooseAjvPlugin, { schema: productSchema });

const ProductSchema = mongoose.model("ProductSchema", productSchema);

export default ProductSchema;
