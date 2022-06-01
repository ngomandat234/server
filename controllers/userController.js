const user = require('../models/userModel')
const student = require('../models/attedence')
const sensor = require('../models/sensor')
const rfid = require('../models/rfid')
const findUserData = (req,res,next)=>{
    user.find()
    .then ((respond)=>{
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}

const showID = (req,res,next) =>{
    const userID = req.body.userID
    user.findById(userID)
    .then ((respond)=>{
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}

const addUser = async(req,res,next) => {
    try{
    const newUser = new user({
        name : req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    await newUser.save()
   res.json({message:"Add user Successfully"})

    }
    catch (err) {
        res.json({message:"An Error Occured"})
    }

}
const updateUser = (req,res,next) => {
    const userID = req.body.userID
    let updateData = ({
        name : req.body.name,
        age: req.body.age,
        phone : req.body.phone
    })
    user.findByIdAndUpdate(userID, {$set:updateData})
    .then (()=>{
        res.json({message:"Update user Successfully"})

    })
    .catch ((err)=> {
        //res.status(500).json({error:err})
        res.json({message:"An Error Occured"})
    })
}
const deleteUser = (req,res,next) => {
    let userID = req.body.userID
    user.findByIdAndDelete(userID)
    .then (()=>{
        res.json({message:"Delete user Successfully"})
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
       // res.json({message:"An Error Occured"})
    })

}

const addStudent = async(req,res,next) => {
    console.log(req.body.name);
    try{
    const newStudent = new student({
        name : req.body.name,
        id: req.body.id,
        subject: req.body.subject,
        teacher: req.body.teacher,
        time: req.body.time
    })
    await newStudent.save()
   res.json({message:"Check student Successfully"})
    }
    catch (err) {
        res.json({message:err})
    }

}
const delStudent = (req,res,next) => {
    let studentID = req.body.id
    student.findOneAndRemove({id: studentID})
    .then (()=>{
        res.json({message:"Delete user Successfully"})
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
        res.json({message:"An Error Occured"})
    })

}
const updateStudent = (req,res,next) => {
    const studentID = req.body.id
    let updateData = ({
        time : req.body.time
    })
    student.findOneAndUpdate({id:studentID}, {$set:updateData})
    .then (()=>{
        res.json({message:"Update student Successfully"})

    })
    .catch ((err)=> {
        //res.status(500).json({error:err})
        res.json({message:"An Error Occured"})
    })
}
const addSensor = async(req,res,next) => {
    try{
    const newSensor = new sensor({
        temp : req.body.temp,
        humidity: req.body.humidity
    })
    await newSensor.save()
   res.json({message:"Add Sensor Successfully"})

    }
    catch (err) {
        res.json({message:"Error"})
    }

}

const showSensor = async(req,res,next) => {
       sensor.find()
        .then ((respond)=>{
            res.status(200).json(respond)
        })
        .catch ((err)=> {
            res.status(500).json({error:err})
        })
    }
const addRfid = async(req,res,next) => {
        try{
        const newRfid = new rfid({
            time : req.body.time,
            id: req.body.id
        })
        await newRfid.save()
       res.json({message:"Add ID Rfid Successfully"})
    
        }
        catch (err) {
            res.json({message:"Error"})
        }
    
    }
const showRfid = async(req,res,next) => {
           rfid.find()
            .then ((respond)=>{
                res.status(200).json(respond)
            })
            .catch ((err)=> {
                res.status(500).json({error:err})
            })
        }
module.exports = {findUserData,showID,addUser,updateUser,deleteUser,addStudent,delStudent,updateStudent,addSensor,showSensor, addRfid, showRfid}