const express = require('express')
const router = express.Router()
const user  = require('../controllers/userController')
const auth = require("../middleware/authentication")
const checkAdmin = require("../middleware/checkAdmin")
const path = require("path")
// router.get("/stream",auth,(req,res)=>{
//     res.sendFile(__dirname + "/index.html")
// })
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs"))
router.get("/login",(req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",(req,res)=> res.render("../views/basicUser.ejs"))
router.get("/getUser",auth,user.findUserData)
// router.get('/stream',auth,function(req,res) {
//     res.sendFile(path.join(__dirname+ "../index.html"));
//   });
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
module.exports = router
    