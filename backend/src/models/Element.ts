import mongoose from "mongoose";

const ElementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("Element", ElementSchema);
