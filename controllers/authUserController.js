//const authUser = require('../models/authUserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const db = require("../models")
//const Role = db.roleUser
const register = (req,res,next)=>{
    bcryptjs.hash(req.body.password,10).then(()=>{
        let newUser = new User({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            phone:req.body.phone,
            role:req.body.role
        })
      //   newUser.save((err, user) => {
      //       if (err) {
      //         res.status(500).send({ message: err });
      //         return;
      //       }
      //       if (req.body.roles) {
      //         Role.find(
      //           {
      //             name: { $in: req.body.roles }
      //           },
      //           (err, roles) => {
      //             if (err) {
      //               res.status(500).send({ message: err });
      //               return;
      //             }
      //             user.roles = roles.map(role => role._id);
      //             console.log (roles + " role1")
      //             console.log(JSON.stringify(roles) + " role khi dang ky1")
      //             user.save(err => {
      //               if (err) {
      //                 res.status(500).send({ message: err });
      //                 return;
      //               }
      //               res.send({ message: "User was registered successfully!" });
      //             });
      //           }
      //         );
      //       } else {
      //         Role.findOne({ name: "user" }, (err, role) => {
      //           if (err) {
      //             res.status(500).send({ message: err });
      //             return;
      //           }
      //           // user.roles = [role._id];
      //           console.log (role + " role2")
      //           console.log(JSON.stringify(role) + " role khi dang ky2")
      //           user.save(err => {
      //             if (err) {
      //               res.status(500).send({ message: err });
      //               return;
      //             }
      //             res.send({ message: "User was registered successfully!" });
      //           });
      //         });
      //       }
      //     });
      //  });
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
    //  next()
}

 const login = (req,res,next) => {
     var email = req.body.email
     var password = req.body.password
     User.findOne({$or : [{email:email}, {phone:email}]})
    // .populate("roles", "-__v")
     .then((user)=>{
         if(user)
         {    
           bcryptjs.compare(password,user.password, function(err,result){
            if(err)
            {
             res.status(500).json({error:err})
            }
               if (!result)
               {
                // var authorities = [];
                // for (let i = 0; i < user.roles.length; i++) {
                //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
                // }
                   let token = jwt.sign({id:user.id}, "verySecretValue", {expiresIn : "1h"} )
                   let refreshToken = jwt.sign({name:user.name}, "refreshToken", {expiresIn : "48h"} )
                    res.status(200).json({
                        message:"Login Successfully",
                        id: user._id,
                        email: user.email,
                        role:user.role,
                       // roles: authorities,
                        token,
                        refreshToken
                    })
               }
               else {
                res.status(500).json({message: "Password does not match"})
               }
           })
         }
         else {
            res.status(500).json({message: "No user found"})
         }
     })
 }

 const refreshToken = (req,res,next) => {
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