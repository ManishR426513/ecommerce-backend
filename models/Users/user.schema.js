import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: true,
    },
    email: {
      type: String,
      default: true,
      unique: true,
    },
    password: {
      type: String,
      default: true,
    },
    profilePic: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users",userSchema)