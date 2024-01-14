const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },content:{
        type:String,
        required:true
       
    }
})

module.exports = mongoose.model('Notes', NotesSchema)