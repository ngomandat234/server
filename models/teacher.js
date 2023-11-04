const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const teacherSchema = new Schema ({
    name:{
        type:String
    },
    teacher_id:{
        type:String
        
    },
    birthday: {
        type:Date
    },
    gender: {
        type:String
    },
    academic_rank:{
        type : String
    },
    academic_degree: {
        type : String
    }
}, {timestamps:true})
const teacherModel = mongoose.model('teacher', teacherSchema)
module.exports=teacherModel