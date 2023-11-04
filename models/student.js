const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const _studentSchema = new Schema ({
    name:{
        type:String
    },
    student_id:{
        type:String  
    },
    card_id:{
        type:String  
    },
    birthday: {
        type:String
    },
    subject: {
        type:Date
    },
    gender:{
        type :  String
    },
    attendance_status_ids: {
        type : Array
    },
    facial_recognition_data: {
        type : Array
    }
}, {timestamps:true})
const _studentModel = mongoose.model('_student', _studentSchema)
module.exports=_studentModel