const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const studentSchema = new Schema ({
    name:{
        type:String
    },
    id:{
        type:String,
        required:true
    },
    subject: {
        type:String
    },
    teacher:{
        type : String,
    },  
    time: {
        type : String,
        required:true
    },
}, {timestamps:true})
const studentModel = mongoose.model('Student', studentSchema)
module.exports=studentModel