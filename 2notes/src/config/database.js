import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

export const connectDB = async ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((error)=>{
        console.log("Error During connected db",error);
        process.exit(1);
    })
}

export default connectDB;