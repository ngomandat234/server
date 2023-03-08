const user = require('../models/userModel')
const student = require('../models/attedence')
const sensor = require('../models/sensor')
const rfid = require('../models/rfid')
const {google} = require('googleapis');

const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets", 
});
const authClientObject = auth.getClient();

//Google sheets instance
const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

// spreadsheet id
const spreadsheetId = "1FFVdpNqWv8Rd3CR1rGW4NN-DLeqwjeKzBgEIeHZqk-Y";

const findUserData = (req,res,next)=>{
    user.find()
    .then ((respond)=>{
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}
const getFeature = (req,res,next)=>{
    student.find().select('id feature -_id')
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
const creatingSheet = async() => {
    // Get metadata about spreadsheet
    const sheetClear = await googleSheetsInstance.spreadsheets.values.clear({
        auth,
        spreadsheetId,
        range: "A1:F100",
    });
    let title = ['NO.', 'ID', 'NAME', 'SUBJECT', 'TEACHER', 'TIME'];
    const sheetInfo = await googleSheetsInstance.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "A:F",
        valueInputOption: "USER_ENTERED", 
        resource: {
            values: [title]
        },
    });
    // console.log(sheetInfo.data.values.length);
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
    // reqq = JSON.parse(req.body.json)
    // const studentID = reqq.id
    // student.countDocuments({id: studentID}, function (err, count){ 
    //     if(count>1){   
    //         student.findOneAndRemove({id: studentID})
    //         .then (()=>{
    //             res.json({message:"Delete user Successfully"})
    //         })
    //         .catch ((err)=> {
    //             res.status(500).json({error:err})
    //             res.json({message:"An Error Occured"})
    //         })
    //     }else {      
    //                 res.json({message:"An Error Occured"})
    //     }
    // });  
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
const updateAndCreateStudent = async(req,res,next) => {  
    console.log(req.body);
    reqq = JSON.parse(req.body.json)
    const studentID = reqq.id
    console.log(reqq);
    if(studentID != ""){
    student.countDocuments({id: studentID}, function (err, count){ 
        if(count > 0){   
            // console.log(studentID)
            let updateData = ({
                //feature: reqq.feature,
                time: reqq.time
            })
            student.findOneAndUpdate({id:studentID}, {$set:updateData})
            student.updateOne({id:studentID}, {$push: {feature: reqq.feature}})
            .then (()=>{
                res.json({message:"Update student Successfully"})

            })
            .catch ((err)=> {
                res.json({message:"An Error Occured"})
            })
        }else {
            try{
                const newStudent = new student({
                    id: reqq.id,
                    time: reqq.time,
                })
                newStudent.save()
                res.json({message:"Create student Successfully"})
                }
                catch (err) {
                    res.json({message:"An Error Occured"})
                }    
        }
    });  
} else {
    res.json({message:"ID is null!!!"})
}
}
const updateTimeStudent = async(req,res,next) => {  
    reqq = JSON.parse(req.body.json)
            const studentID = reqq.id
            let updateData = ({
                time: reqq.time
            })
            student.findOneAndUpdate({id:studentID}, {$set:updateData})
            .then (()=>{
                res.json({message:"Update student Successfully"})
            })
            .catch ((err)=> {
                res.json({message:"An Error Occured"})
            })
}

const updateStudent = async(req,res,next) => {  
    const studentID = req.body.id
            let updateData = ({
                name: req.body.name,
                subject: req.body.subject,
                teacher: req.body.teacher,
                time: req.body.time
            })
            student.findOneAndUpdate({id:studentID}, {$set:updateData})
            .then (()=>{
                res.json({message:"Update student Successfully"})
                console.log("Succers")
                console.log(updateData)
            })
            .catch ((err)=> {
                res.json({message:"An Error Occured"})
                console.log("Failed")
                console.log(updateData)
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
module.exports = {findUserData,showID,addUser,updateUser,deleteUser,addStudent,updateTimeStudent,
                    delStudent,updateStudent,updateAndCreateStudent,addSensor,showSensor, addRfid, showRfid, getFeature,
                    creatingSheet}