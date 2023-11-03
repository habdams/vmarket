import mongoose from "mongoose";
import mongooseAjvPlugin from "mongoose-ajv-plugin";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

imageSchema.plugin(mongooseAjvPlugin, { schema: imageSchema });

const ImageSchema = mongoose.model("Image", imageSchema);

export default ImageSchema;
