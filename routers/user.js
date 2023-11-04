const express = require('express')
const student = require('../models/attedence')
const rfid = require('../models/rfid')
const index = require('../models/index')
const router = express.Router()
const user  = require('../controllers/userController')
const sheets  = require('../controllers/sheetsController')
const auth = require("../middleware/authentication")
const Jimp = require("jimp")

module.exports = function (io) {
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs"))
router.get("/login",auth.authenticate, (req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",auth.authenticateBasicUser, async (req,res)=> {
    const list_students = await student.find().select('id name subject teacher time mssv -_id');
        res.render("../views/basicUser.ejs",{studentList: list_students})
    // console.log(list_students)
})
router.get("/stream",function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.render("../views/stream.ejs")
})
//router.get("/getUser",auth,user.findUserData)
router.get("/ui",(req,res)=> res.render("../views/ui.ejs"))

router.get("/getUser",user.findUserData)
router.get("/getFeature",user.getFeature)
router.get("/create",async(req,res,next)=>{
try{
    const newUser = new index.class({
        class_id : "CE206.O11",
        name: "Project 2 Class",
        subject_id: "12230221",
        teacher_id: "01",
        agenda_ids : ["0001", "0002", "0003", "0004"],
        student_ids: ["20520000", "20520001", "20520002", "20520003", "20520005", "20520006"]
    })
    // const newUser = new index.subject({
    //         subject_id: "12230221",
    //         name: "Project 2"
    //     })
    // const newUser = new index.subject({
    //     subject_id: "12230221",
    //     name: "Project 2"
    // })
    // const newUser = new index.teacher({
    //     teacher_id: "12230221",
    //     name: "Tran Van H",
    //     birthday: new Date("1985-04-04"),
    //     gender: "Male",
    //     academic_rank: "Lecturer",
    //     academic_degree: "Master",
    // })
    // const newUser = new index.student({
    //     name : "Hoang Thi B",
    //     student_id: "20520001",
    //     card_id: "9A9F2164",
    //     birthday: new Date("2002-06-26"),
    //     gender: "Male",
    //     attendance_status_ids : [],
    //     facial_recognition_data: []
    // })
    // const newUser = new index.agenda({
    //     agenda_id: "20520006",
    //     date: new Date("2023-11-25"),
    //     start_time: new Date("2023-11-25T13:00:00"),
    //     end_time: new Date("2023-11-25T17:00:00"),
    // })
    await newUser.save()
   res.json({message:"Add Successfully"})

    }
    catch (err) {
        res.json({message:"An Error Occured"})
    }
})
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
router.post('/attendance',user.addStudent)
// router.post('/uploadFile', user.updateImage)
// router.post('/creatingSheet',sheets.updateSheet)
// router.post('/uploadFile', async(req,res,next) => {
//     res.json({message:"ok"})
//     console.log("receive image")
//     io.emit('showimg', req.body.img)
// })
router.post('/deleteAttendance', user.delStudent)
router.post('/updateAttendance', user.updateAndCreateStudent)
router.post('/updateStudent', user.updateStudent)
// router.post('/updateTimeStudent', user.updateTimeStudent)
router.post('/addSensor',async(req,res,next)=>{
    try{
        var data = JSON.parse(req.body.json)
        console.log(data.temp)
        let newSensor = ({
            temp : data.temp.toFixed(2),
            humidity: data.hum.toFixed(2)
        })
        await io.emit('changeTemHum', newSensor);
        res.json({message:"Send Sensor Data Successfully"})
        }
        catch (err) {
            res.json({message:"Error"})
        }
})
router.post('/temphum',async(req,res,next)=>{
    try
    {   
        var data = JSON.parse(req.body.json)
        let newSensor = ({
            temp : data.temp,
            humidity: data.hum
        })
        await io.emit('changeTemHum', newSensor);
        console.log(newSensor)
        res.json({message:"Sent sensor data successfully"})
    }
    catch (err) {
        res.json({message:"Error"})
    }
})
router.post('/id',async(req,res,next)=>{
    try
    {   
        // var data = JSON.parse(req.body)
        // console.log(req.body)
        // let newSensor = ({
        //     temp : data.temp,
        //     humidity: data.hum
        // })
        // await io.emit('changeTemHum', newSensor);
        // console.log(req.body.id)
        // res.json({message:"Sent id data successfully"})
    }
    catch (err) {
        res.json({message:"Error"})
    }
    
})
router.post('/updateTimeStudent', async(req,res,next) => {
    reqq =  JSON.parse(req.body.json)
    const studentID = reqq.id
    var replacedTime =  reqq.time.replace(/:/g, "-");
    console.log(studentID)
    // console.log(reqq.img)
    let updateData = ({
        time: replacedTime
    })
    // console.log("updatingg...")
    // console.log("update success full")
    const buffer = Buffer.from(reqq.img, "base64");  
    var replacedTime1 = replacedTime.replace(/\s/g, "_");
    // console.log(replacedTime1)
    const nameImg = replacedTime1 + ".png";
    // console.log(nameImg)
    Jimp.read(buffer, (err, res) => {
            if (err) throw new Error(err);
            res.quality(5).write("public/images/"+ nameImg);
            // console.log(res)
            });
    await student.updateOne({id:studentID}, {$push: updateData})
    .then (async()=>
    {   
        res.json({message:"Update student Successfully"})
        console.log("Update time Successfully - ID : " + studentID)
    })
    .catch ((err)=> 
    {
        res.json({message:err})
    })
   
})
// router.post('/updateTimeStudent', user.readExcelAndSaveToMongoDB)
// router.post('/updateTimeStudent', user.readExcelAndDelete)
router.get('/showSensor',user.showSensor)
router.post('/addRfid',user.addRfid)
return router;
//module.exports = router(io)
}
    