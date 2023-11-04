const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const classSchema = new Schema ({
    name:{
        type : String
    },
    class_id:{
        type : String
    },
    subject_id: {
        type : String
    },
    teacher_id:{
        type : String
    },
    agenda_ids: {
        type : Array
    },
    student_ids: {
        type : Array
    }
}, {timestamps:true})
const classModel = mongoose.model('class', classSchema)
module.exports=classModel