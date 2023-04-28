const mongoose = require("../config/db");

const notesSchema = mongoose.Schema({
  title: String,
  details: String,
  category: String,
});

const Note = mongoose.model("note", notesSchema);

module.exports = Note;
