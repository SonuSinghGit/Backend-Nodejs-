import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const connectDB = async ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("db connected successfully");
    })
    .catch((error)=>{
      console.log("error while connecting db",error)
      process.exit(1);
    })
}

export default connectDB;