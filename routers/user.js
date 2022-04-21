const express = require('express')
const router = express.Router()
const user  = require('../controllers/userController')
const auth = require("../middleware/authentication")
const checkAdmin = require("../middleware/checkAdmin")
const path = require("path")
router.get("/getUser",auth,user.findUserData)
// router.get('/stream',auth,function(req,res) {
//     res.sendFile(path.join(__dirname+ "../index.html"));
//   });
router.post("/showID", user.showID)
router.post("/update", user.updateUser)
router.post("/delete", user.deleteUser)
router.post("/add", user.addUser)
module.exports = router
