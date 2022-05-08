const express = require('express')
var myMongoDbObject = {errorr : ''};
const router = express.Router()
const user  = require('../controllers/userController')
const auth = require("../middleware/authentication")
router.get("/",(req,res)=> res.render("../views/home.ejs"))
router.get("/register",(req,res)=> res.render("../views/register.ejs",{locals: { data : myMongoDbObject }}))
router.get("/login",(req,res)=> res.render("../views/login.ejs"))
router.get("/admin",(req,res)=> res.render("../views/admin.ejs"))
router.get("/basicUser",(req,res)=> res.render("../views/basicUser.ejs"))
router.get("/getUser",auth,user.findUserData)
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
router.post('/attendence',user.addStudent)
module.exports = router
    