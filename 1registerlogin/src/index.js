import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";

dotenv.config(); 

const PORT = process.env.PORT || 9000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("welcome to node js backend");
});

connectDB();
