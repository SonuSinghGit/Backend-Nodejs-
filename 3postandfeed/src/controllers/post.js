import { Post } from "../models/post.model.js";

export const createPost = async(req,res)=>{
    try{
        const { caption, image } = req.body;
        const file = req.file;

        if(!file){
            return res.status(400).json({ message: "Image file is required." });
        }

        const post = await Post.create({
            image: file.path,
            caption: caption 
        });

        return res.status(201).json({ message: "Post created.", post });
    }catch(error){
        return res.status(500).json({ message: "Failed to create post.", error: error?.message });
    }
}
