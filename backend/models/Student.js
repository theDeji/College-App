const mongoose = require('mongoose')

const StudentShema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    classIn:{
        type: String,
        required:true
    },
    studentNo:{
        type: String,
        required:true
    }
})

const Student = mongoose.model("Student", StudentShema)

module.exports = Student