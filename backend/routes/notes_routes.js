const express = require('express');

const router = express.Router();
const notesController = require("../controller/notes"); // Corrected variable name


router.post("/", notesController.postNote);
router.put("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);


module.exports = router;