import express from "express"
const router = express.Router();
import { createNotes, deleteNotes, getNotes, updateNotes } from "../controllers/notes.controller.js";

router.post("/create",createNotes);
router.get("/get",getNotes);
router.put("/update/:id",updateNotes)
router.delete("/delete/:id",deleteNotes);

export default router;  
