import mongoose,{model, Schema} from "mongoose";

const postSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    caption:{
        type:String
    }
})

export const Post = mongoose.model("Post",postSchema);