import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).send({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error in register API",
      error,
    });
  }
};
// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send({ message: "Invalid password" });
    }

    res.status(200).send({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while login API",
      error,
    });
  }
};