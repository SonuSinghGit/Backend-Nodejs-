import { v2 as cloudinary } from 'cloudinary'
import dotenv from "dotenv"
import fs from "fs";
dotenv.config();

cloudinary.config({ 
  cloud_name:process.env.CLOUDE_NAME, 
  api_key:process.env.CLOUDE_API_KEY,
  api_secret:process.env.CLOUDE_API_SECRET
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been upload sucessfully
        console.log("cloudinary response ",response);
       
        console.log("Fil is uploaded on clodinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        //locally save temporary file as the upload operation got failed
        return null;
        
    }
}

export {uploadOnCloudinary};