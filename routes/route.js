const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  postNote,
  updateNote,
  deleteNote,
} = require("../controller/noteController");

// Get all Notes
router.get("/", getAllNotes);

// Post Note
router.post("/", postNote);

//Update a Note
router.patch("/:id", updateNote);

//Delete a Note
router.delete("/:id", deleteNote);

module.exports = router;
