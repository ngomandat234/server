const express = require('express')
const router= express.Router()
const checkEmail = require("../middleware/verifySignUp")
const checkAdmin = require("../middleware/checkAdmin")
const auth = require("../middleware/authentication")
const authUserController = require('../controllers/authUserController')
module.exports = function (aa) {
router.post('/register',checkEmail,authUserController.register)
router.post('/login',authUserController.login,auth)
// router.post('/refreshToken',checkEmail, authUserController.refreshToken)
return router;
}