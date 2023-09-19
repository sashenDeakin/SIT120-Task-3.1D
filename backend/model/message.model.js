import mongoose from "mongoose";

const message = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: String,
    message: String,
    time: { type: Date, default: Date.now },
  },
  { collection: "message-data" }
);

export default mongoose.model("messageData", message);
