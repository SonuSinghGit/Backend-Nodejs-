import { Post } from "../models/post.model.js";
import { uploadOnCloudinary } from "../services/cloudinary.js";

export const createPost = async (req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;

        console.log("body", req.body);
        console.log("file", file);

        if (!file) {
            return res.status(400).json({ message: "Image file is required." });
        }
        // Upload to Cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(file.path);
        if (!cloudinaryResponse) {
            return res.status(500).json({ message: "Cloudinary upload failed" });
        }
        // Save Cloudinary URL instead of local path
        const post = await Post.create({
            image: cloudinaryResponse.secure_url,
            caption: caption
        });

        return res.status(201).json({
            message: "Post created.",
            post
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create post.",
            error: error?.message
        });
    }
};

export const getPost= async(req,res)=>{

    try {
        const posts = await Post.find();
        if(!posts){
            return res.status(400).json({message:"post not found"})
        }
    
        return res.status(200).json({
            sucess:true,
            message:"get post sucefully",
            posts
        })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message:"Error during get posts"
        })
    }
}