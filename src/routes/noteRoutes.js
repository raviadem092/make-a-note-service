const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.get("/user/getAllNotes", noteController.getAllNotes);

router.get("user/getNote/:id", noteController.getNote);

router.post("/user/createNote", noteController.createNote);

router.put("/user/updateNote/:id", noteController.updateNote);

router.delete("/user/deleteNote/:id", noteController.deleteNote);

module.exports = router;