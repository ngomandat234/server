const express = require('express')
const router = express.Router()
const user  = require('../controllers/userController')
const student = require('../models/attedence')
const auth = require("../middleware/authentication")
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs"))
router.get("/login",(req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",(req,res)=> {
    student.find({},function(err, students){
    res.render("../views/basicUser.ejs",{studentList: students})
})
})
router.get("/stream",function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.render("../views/stream.ejs")
})
router.get("/getUser",auth,user.findUserData)
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
router.post('/attendence',user.addStudent)
router.post('/deleteAttendence', user.delStudent)
module.exports = router
    