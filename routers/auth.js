const express = require('express')
const router= express.Router()
const checkEmail = require("../middleware/verifySignUp")
const checkAdmin = require("../middleware/checkAdmin")
const auth = require("../middleware/authentication")
const {registerValidation} = require("../models/validation")
const authUserController = require('../controllers/authUserController')
router.post('/register',checkEmail,authUserController.register,function(req,res)
{
    const{ error } = registerValidation(req.body);
    if(error) 
    return res.status(400).send(error.details[0].message)
}
)
router.post('/login',authUserController.login)
router.post('/refreshToken',checkEmail, authUserController.refreshToken)
module.exports=router