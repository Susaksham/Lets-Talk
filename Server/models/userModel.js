// const mongoose = require("mongoose");
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

    pic: {
      type: String,

      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
    },
  },
  {
    timeStamps: true,
  }
);
userSchema.statics.matchPassword = async function (
  enteredPassword,
  inputPassword
) {
  return await bcrypt.compare(enteredPassword, inputPassword);
};
userSchema.pre("save", async function (next) {
  const hashed = await bcrypt.hash(this.password, 10);
  this.password = hashed;
  // next();
});
const User = mongoose.model("User", userSchema);

export default User;
