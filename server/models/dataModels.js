import mongoose, { Schema } from "mongoose";

const StoreData = new Schema({
  gameName: String,
  gamePrice: Number,
  // gameDescription: String,
  // gameImage: [{ name: String, downloadUrl: String }],
});
export default mongoose.model("Game", StoreData);
