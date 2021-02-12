const mongoose = require('mongoose')
const express= require('express')
var cors = require('cors')
const bodyparser = require("body-parser")


const Teacher = require('./models/Teacher')
const Student = require('./models/Student')

const app = express()
const PORT = process.env.PORT || 3002

const route = express.Router()

app.use(bodyparser.json())
mongoose.connect(`mongodb://localhost:27017/school`, {useNewUrlParser: true, useUnifiedTopology:true})
app.use(cors())

app.use((req, res, next) =>{
    
    // console.log(`${new Date().toString()} ${req.originalUrl}`) 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    
    // Request methods you wish to allow 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow 
    res.header('Access-Control-Allow-Headers', 'content-type, authorization'); 
    res.header('Access-Control-Expose-Headers', 'Content-Length, your-access-token');
    
    // Set to true if you need the website to include cookies in the requests sent // to the API (e.g. in case you use sessions)
    
    next()
})


route.get("/teachers", async(req, res) =>{

    const teachers = await Teacher.find()

    return res.status(200).json(teachers)
    console.log(teachers)
})

route.get("/students", async(req, res) =>{
    
    const students = await Student.find()
    
    return res.status(200).json(students)
    console.log(students)
})



route.post("/teachers/add", async(req, res) =>{

    const {firstname, lastname, level, classHeld, staffNo} = req.body
    
    const teacher = new Teacher(req.body)
    const savedteacher = await teacher.save()

    return res.status(200).json(savedteacher)
})

route.post("/students/add", async(req, res) =>{

    const {firstname, lastname, classIn, studentNo} = req.body

    const student = new Student(req.body)
    const savedStudent = await student.save()

    return res.status(200).json(savedStudent)
})


app.use(route)
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})