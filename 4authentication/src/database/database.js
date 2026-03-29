import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("DataBase connected successfully")
        })
        .catch((error)=>{
            console.log("Error While Conecting Db",error);
            process.exit(1);
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;