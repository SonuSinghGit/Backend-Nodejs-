import dotenv from "dotenv";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username && email && password)) {
    return res.status(400).json({
      success: false,
      message: "username, email, password are required",
    });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  const user = await User.create({ username, email, password });

  // create token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // store token in cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production
  });

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user,
  });
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  // check input
  if (!(email && password)) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log("Entered password:", password);
console.log("DB password:", user.password);

    // compare password 
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};