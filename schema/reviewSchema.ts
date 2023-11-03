import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
});

reviewSchema.plugin(mongooseAjvPlugin, { Schema: reviewSchema });

const ReviewSchema = mongoose.model("ReviewSchema", reviewSchema);

export default ReviewSchema;
