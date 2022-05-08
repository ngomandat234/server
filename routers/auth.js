const express = require('express')
const router= express.Router()
const checkEmail = require("../middleware/verifySignUp")
const checkAdmin = require("../middleware/checkAdmin")
const auth = require("../middleware/authentication")
const authUserController = require('../controllers/authUserController')
//const { check, validationResult } = require('express-validator')
module.exports = function (aa) {
// console.log(aa);
router.post('/register',authUserController.register)
router.post('/login',authUserController.login)
router.post('/refreshToken',checkEmail, authUserController.refreshToken)
return router;
}