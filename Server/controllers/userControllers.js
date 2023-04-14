import mongoose from "mongoose";

import User from "../models/userModel.js";
import { generateToken } from "../connection/generateToken.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please Enter all the Feilds" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send("User already exists");
    }
    const user = await User({ name, email, password, pic });
    const data = await user.save();

    if (user) {
      console.log(user);
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: await generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: "Cannot create" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err });
  }
};

export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.json(401).send({ message: "User not found" });
    }
    console.log(user);
    console.log(await User.matchPassword(password, user.password));
    if (user && (await User.matchPassword(password, user.password))) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: await generateToken(user._id),
      });
    } else {
      console.log("error");
      return res.status(401).json({ message: "User does not exist" });
    }
  } catch (err) {
    console.log(err);
  }
};
