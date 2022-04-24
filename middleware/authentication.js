const jwt = require('jsonwebtoken')
const db = require("../models")
const User = db.user
const Role = db.ROLES

const authenticate = (req,res,next) => {
    try {
    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token,"verySecretValue")   
    //req.body = decode
    req.userID = decode.id
    //var userID = decode.id
    res.cookie("access-token", token, { maxAge: 86400000 ,httpOnly:true});
    res.cookie("user-data", JSON.stringify(token), { maxAge: 86400000 ,httpOnly:true});
    next()
}
    catch(err){
        if (err.name == "TokenExpiredError"){
            res.status(401).json({message:"Token expired"})
        }
        else
        res.json({
           message : "Authentication failed"
        })
    }
}

module.exports= authenticate
