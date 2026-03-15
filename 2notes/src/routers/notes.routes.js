import express from "express"
const router = express.Router();
import { createNotes } from "../controllers/notes.controller.js";

router.post("/create",createNotes);

export default router;


