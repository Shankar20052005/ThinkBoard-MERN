export async function getAllNotes(req,res){
    res.status(200).send("You just fetched all the notes");
};

export async function createNewNote(req,res){
    res.status(201).json({message: "Note created successfully!"});
};

export async function updateNote(req,res){
    res.status(200).json({message: "Note updated successfully!"});
};

export async function deleteNote(req,res){
    res.status(200).json({message: "Note deleted successfully!"});
};