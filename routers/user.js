const express = require('express')
const student = require('../models/attedence')
const rfid = require('../models/rfid')
const router = express.Router()
const user  = require('../controllers/userController')
const auth = require("../middleware/authentication")
module.exports = function (io) {
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs"))
router.get("/login",(req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",(req,res)=> {
    student.find({},function(err, students){
    rfid.find({}, function(err, rfids){
        res.render("../views/basicUser.ejs",{studentList: students, rfidList: rfids})
    })    
})
})
router.get("/stream",function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.render("../views/stream.ejs")
})
//router.get("/getUser",auth,user.findUserData)
router.get("/getUser",user.findUserData)
router.get("/getFeature",user.getFeature)
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
router.post('/attendance',user.addStudent)
router.post('/deleteAttendance', user.delStudent)
router.post('/updateAttendance', user.updateAndCreateStudent)
router.post('/updateStudent', user.updateStudent)
router.post('/updateTimeStudent', user.updateTimeStudent)
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
router.get('/showSensor',user.showSensor)
router.post('/addRfid',user.addRfid)
return router;
//module.exports = router(io)
}
    