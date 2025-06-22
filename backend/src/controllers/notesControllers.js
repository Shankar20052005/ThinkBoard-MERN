import Note from "../models/Note.js";

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch (error){
        console.error("Error in getAllNotes Controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export async function createNewNote(req,res){
    try{
        const {title,content} = req.body;
        const note = new Note({title,content});
        //const newNote = new Note({title,content});
        // console.log(title,content);

        //await newNote.save();
        const savedNote = await note.save();
        res.status(201).json({message:"Note created successfully"});
    } catch (error) {

    }
};

export async function updateNote(req,res){
    res.status(200).json({message: "Note updated successfully!"});
};

export async function deleteNote(req,res){
    res.status(200).json({message: "Note deleted successfully!"});
};



// export async function getAllNotes(req,res){
//     res.status(200).send("You just fetched all the notes");
// };

// export async function createNewNote(req,res){
//     res.status(201).json({message: "Note created successfully!"});
// };

// export async function updateNote(req,res){
//     res.status(200).json({message: "Note updated successfully!"});
// };

// export async function deleteNote(req,res){
//     res.status(200).json({message: "Note deleted successfully!"});
// };