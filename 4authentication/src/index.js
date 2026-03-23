import express from "express"
import dotenv from "dotenv"
import app from "../src/app.js"
import connectDB from "./database/database.js";

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async()=>{
    console.log(`App is running on ${PORT}`)
    await connectDB();
})