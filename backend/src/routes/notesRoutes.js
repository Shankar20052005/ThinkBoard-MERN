import express from "express";
//const express = require("express");
import { getAllNotes } from "../controllers/notesControllers.js";
import { createNewNote } from "../controllers/notesControllers.js";
import { updateNote } from "../controllers/notesControllers.js";
import { deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllNotes);
router.post("/",createNewNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

//* */
export default router;




//* */
// router.get("/", (req,res) => {
//     res.status(200).send("You just fetched the notes");
// });

// router.post("/", (req,res) => {
//     res.status(201).json({message: "Note created successfully!"});
// });

// router.put("/:id", (req,res) => {
//     res.status(200).json({message: "Note updated successfully!"});
// });

// router.delete("/:id", (req,res) => {
//     res.status(200).json({message: "Note deleted successfully!"});
// });