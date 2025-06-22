import mongoose from "mongoose";

//1. Create the Schema
//2. Create the Model based off of the Schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{timestamps: true} // createdAt, UpdatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;