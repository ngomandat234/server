const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const userSchema = new Schema ({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password: {
        type : String
    },
    age:{
            type:Number
    },
    phone: {
        type:String
    },
    role:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref:"Role"
        type : String,
        default : "user",
        enum : ["user", "admin"]
    },
}, {timestamps:true})
const userModel = mongoose.model('User', userSchema)
module.exports=userModel