import express from 'express';
import dotenv from "dotenv"
import app from "../src/app.js"
import connectDB from './config/database.js';

dotenv.config()
const PORT=process.env.PORT ||5000
app.use(express.json())

app.listen(PORT,async()=>{
    console.log(`App is running on ${PORT}`)
    await connectDB();
})