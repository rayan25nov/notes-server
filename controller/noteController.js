const Note = require("../models/notes.schema");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const postNote = async () => {
  const note = new Note({
    title: req.body.title,
    details: req.body.details,
    category: req.body.category,
  });
  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateNote = async () => {
  let idToUpdate = req.params.id;
  let obj = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(idToUpdate, obj, {
      new: true,
    });
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteNote = async () => {
  const idToDelete = req.params.id;
  try {
    await Note.findByIdAndDelete(idToDelete);
    res.status(204).json({ message: "User Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllNotes,
  postNote,
  updateNote,
  deleteNote,
};
