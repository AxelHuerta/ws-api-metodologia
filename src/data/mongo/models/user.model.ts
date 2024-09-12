import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    default: [],
    required: true,
  },
});

export const UserModel = mongoose.model("User", userSchema);
