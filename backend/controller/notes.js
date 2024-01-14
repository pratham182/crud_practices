const Note=require("./../models/notes_model")

exports.postNote = async (req, res) => {

    try {
        const { title, content } = req.body;
        
        console.log(title,content);
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.json(savedNote);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

}



exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        res.json(updatedNote);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

exports.deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        res.json(deletedNote);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}