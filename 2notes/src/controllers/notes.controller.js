import { Notes } from "../models/notes.model.js";

export const createNotes = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }
    const notes =[]
    notes = await Notes.create({title,description});
    return res.status(201).json({
        success:true,
        data:notes,
        message:"Notes created sucessfully"
    })

  } catch (error) {
    res.status(500)
    .send({ message: "Error in create notes API", error });
  }
};
