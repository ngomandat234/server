const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const subjectSchema = new Schema ({
    name:{
        type:String
    },
    subject_id:{
        type:String
        
    }
}, {timestamps:true})
const subjectModel = mongoose.model('subject', subjectSchema)
module.exports=subjectModel