import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//const express = require("express");

dotenv.config();
//console.log(process.env.MONGO_URI);
//console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware - before the routes
app.route(express.json());

app.use("/api/notes",notesRoutes);

//*

app.listen(5001, ()=>{
    console.log("Server started on PORT:", PORT);
});



//*
// app.get("/api/notes", (req,res) => {
//     res.status(200).send("You got 56 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message: "Note created successfully!"});
// });

// app.put("/api/notes:id", (req,res) => {
//     res.status(200).json({message: "Note updated successfully!"});
// });

// app.delete("/api/notes:id", (req,res) => {
//     res.status(200).json({message: "Note deleted successfully!"});
// });
