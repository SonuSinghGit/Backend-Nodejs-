import express from "express"
import { logIn, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create",registerUser)
router.post("/login",logIn)

export default router;