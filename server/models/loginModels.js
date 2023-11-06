import mongoose, { Schema } from "mongoose";

const newAccount = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export default mongoose.model("Account", newAccount);
