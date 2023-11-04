const jwt = require('jsonwebtoken')
const express = require("express");
const db = require("../models")
const user = db.user
const student = require('../models/attedence')
const cookieParser = require("cookie-parser");
//const { user } = require('../models');
const app = express();
app.use(cookieParser());

const authenticate = async(req,res,next) => {
//     try {
//     const token = req.headers.authorization.split(' ')[1]
//     const decode = jwt.verify(token,"ManDatDepTry")   
//     //req.body = decode
//     req.userID = decode.id
//     //var userID = decode.id
//     res.cookie("access-token", token, { maxAge: 86400000 ,httpOnly:true});
//     //res.cookie("user-data", JSON.stringify(token), { maxAge: 86400000 ,httpOnly:true});
//     next()
// }
const token = req.session.token;
  if (!token) {
    // return res.sendStatus(403);
    // console.log("Not have token!");
    return res.render("../views/login.ejs")
    
  }
  try {
    const data = jwt.verify(token, "attendance-secret-key");
    const userLogin = await user.findOne({'_id':data._id, "token" : token})
    req.user = userLogin
    // console.log("has token!");
    // return next();
    return res.redirect("/user/basicUser")
  }
    catch(err){
        if (err.name == "TokenExpiredError"){
            res.status(401).json({message:"Token expired"})
        }
        else
            res.status(500).json({message:"Authentication failed"})
    }
}

const authenticateBasicUser = async(req,res,next) => {
  const token = req.session.token;
  if (!token) {
    // return res.sendStatus(403);
    // console.log("Not have token!");
    return res.redirect("/user/login")
    
  }
  try {
    const data = jwt.verify(token, "attendance-secret-key");
    const userLogin = await user.findOne({'_id':data._id, "token" : token})
    req.user = userLogin
    // console.log("has token!");
    // return next();
    const list_students = await student.find().select('id name subject teacher time mssv -_id');
    return res.render("../views/basicUser.ejs",{studentList: list_students})
  }
    catch(err){
        if (err.name == "TokenExpiredError"){
            res.status(401).json({message:"Token expired"})
        }
        else
            res.status(500).json({message:"Authentication failed"})
    }
}

module.exports= {authenticate, authenticateBasicUser}
