import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/database.js';
import notes from "./routers/notes.js"
dotenv.config();
const PORT = process.env.PORT ||5000;
const app = express();
app.use(express.json());

app.use("/api/v1/notes",notes)

app.listen(PORT, async()=>{
    console.log(`Server is running on Port: ${PORT}`)
    await connectDB();
})