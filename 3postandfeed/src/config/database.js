import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectDB = async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DATABASE CONNECTED SUCESSFULLY");
    })
    .catch((error)=>{
       console.log("Error While Connecting Db",error)
       process.exit(1)
    })
}

export default connectDB;