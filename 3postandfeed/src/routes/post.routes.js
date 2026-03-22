import express from "express"
import { createPost } from "../controllers/post.js";
import { upload } from "../middlewares/multer.middlewares.js";

const postRoutes = express.Router()

postRoutes.post("/create", upload.single("image"), createPost);



export default postRoutes;
