const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    level:{
        type: String,
        required:true
    },
    classHeld:{
        type: String,
        required:true
    },
    staffNo:{
        type: String,
        required:true
    }
})

const Teacher = mongoose.model("Teacher", TeacherSchema)

module.exports = Teacher