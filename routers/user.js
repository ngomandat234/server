const express = require('express')
const student = require('../models/attedence')
const rfid = require('../models/rfid')
const router = express.Router()
const user  = require('../controllers/userController')
const sheets  = require('../controllers/sheetsController')
const auth = require("../middleware/authentication")
const Jimp = require("jimp")
module.exports = function (io) {
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs"))
router.get("/login",(req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",async (req,res)=> {
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
        let newSensor = ({
            temp : req.body.temp,
            humidity: req.body.humidity
        })
        await io.emit('changeTemHum', newSensor);
        res.json({message:"Send Sensor Data Successfully"})
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
router.get('/showSensor',user.showSensor)
router.post('/addRfid',user.addRfid)
return router;
//module.exports = router(io)
}
    