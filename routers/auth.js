const express = require('express')
const router= express.Router()
const checkEmail = require("../middleware/verifySignUp")
const checkAdmin = require("../middleware/checkAdmin")
const authUserController = require('../controllers/authUserController')
router.post('/register',checkEmail,authUserController.register)
router.post('/login', checkAdmin,authUserController.login)
router.post('/refreshToken',checkEmail, authUserController.refreshToken)
module.exports=router