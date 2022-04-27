const express = require('express')
var fs = require('fs')
var ffmpeg = require('fluent-ffmpeg');
const router = express.Router()
const user  = require('../controllers/userController')
const auth = require("../middleware/authentication")
const checkAdmin = require("../middleware/checkAdmin")
const path = require("path")
const { Converter } = require("ffmpeg-stream")
const frames = ["/img/download.png" , "/img/Hinh-Pikachu-hoat-hinh.jpg"]
const { createReadStream, createWriteStream } = require("fs")
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
router.get('/mute-audio', function (req, res) {
  var command = ffmpeg('../music.mp3')
  .videoCodec('libx264')
  .audioCodec('libmp3lame')
  .size('320x240')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  });
 
var ffstream = command.pipe();
ffstream.on('data', function(chunk) {
  console.log('ffmpeg just wrote ' + chunk.length + ' bytes');
});
});
module.exports = router
    