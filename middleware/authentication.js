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
    console.log(JSON.stringify(decode) + "decode id ")
    console.log(req.userID)
    console.log(token)
    res.cookie("access-token", token, { maxAge: 86400000 });
    res.cookie("user-data", JSON.stringify(token), { maxAge: 86400000 });
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
