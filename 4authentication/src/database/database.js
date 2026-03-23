import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DataBase connected successfully")
    })
    .catch((error)=>{
        console.log("Error While Conecting Db",error);
        process.exit(1);
    })

}

export default connectDB;