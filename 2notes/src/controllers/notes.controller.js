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
    // const notes =[]
    const notes = await Notes.create({ title, description });
    return res.status(201).json({
      success: true,
      data: notes,
      message: "Notes created sucessfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error in create notes API", error });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    return res.status(200).json({
      success: true,
      data: notes,
      message: "Notes fetched sucessfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error in get notes API", error });
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const notes = await Notes.findOneAndReplace(
      id,
      { title, description },
      { new: true },
    );
    if (!notes) {
      return res.status(400).json({
        success: flase,
        message: "No notes found",
      });
    }
    return res.status(200).json({
      success: true,
      data: notes,
      message: "Notes updated sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error during updated leads",
      data: error,
    });
  }
};
