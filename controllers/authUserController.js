//const authUser = require('../models/authUserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const db = require("../models/validation")
const register = (req,res,next)=>{
    const{ error } = db.registerValidation(req.body);
     if(error) return res.status(400).send(error.details[0].message)
     else {
    const email = req.body.email
    User.findOne({ email }).then((user)=>{
        if (!user)
        {
            bcryptjs.hash(req.body.password,10).then((user)=>{
                console.log(user)
                let newUser = new User({
                    name:req.body.name,
                    password:user,
                    email:req.body.email,
                    phone:req.body.phone,
                    role:req.body.role  
                })
                newUser.save()
                .then(()=>{
                    res.send("An auth user is added")
                }).catch((err)=>{
                    res.status(500).json({error:err})
                })
            })
            .catch((err)=>{
                res.status(500).json({error:err})
             })
        }
        else   res.status(500).json({message: "User da ton tai"})
    })
       
} 
    //  next()
}

 const login = (req,res,next) => {
    const{ error } = db.loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    else {
     var email = req.body.email
     var password = req.body.password
   //  User.findOne({$or : [{email:email}, {phone:email}]})
         User.findOne({ email })
    // .populate("roles", "-__v")
     .then((user)=>{
         if(user)
         {    
             console.log(password)
        // bcryptjs.hash(password,10,function(err,hash){
        //     console.log(hash + " hash")
        //     console.log(user.password + " hash password")
        //     if(err)
        //     {
        //         throw err
        //     }
           
        //     else {
           bcryptjs.compare(password,user.password, function(err,data) {
               if(err) 
               {
                   res.status(500).json({error})
               }

            if(data){
                    console.log(user.password)
                   let token = jwt.sign({id:user.id}, "verySecretValue", {expiresIn : "1h"} )
                   let refreshToken = jwt.sign({name:user.name}, "refreshToken", {expiresIn : "48h"} )
                    res.status(200).json({
                        message:"Login Successfully",
                        id: user._id,
                        email: user.email,
                        role:user.role,
                        token,
                        refreshToken
                    })
              }
              else {
                  res.status(500).json({message: "Password does not match"})
              }
              
           })
        }
        //  })
        // }
         else {
            res.status(500).json({message: "No user found"})
         }
         
     })
    }
 }



 const refreshToken = (req,res,next) => {
     const refreshToken = req.body.refreshToken
    jwt.verify(refreshToken, "refreshToken", {expiresIn:"48h"}, function (err,decode){
        if(err)
        {
            throw err
        }
        else {
            let token = jwt.sign({name:decode.name}, "verySecretValue", {expiresIn : "60s"})
            let refreshToken = req.body.refreshToken
            res.status(200).json({
                message : "Refresh Token Successfully",
                token,
                refreshToken
            })
        }
    })
 }

module.exports= {register,login,refreshToken}