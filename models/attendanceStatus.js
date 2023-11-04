const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const attendanceStatusSchema = new Schema ({
    date:{
        type: Date
    },
    attendance_status_id:{
        type:String
    },
    status: {
        type:String
    },
    image: {
        type : String
    }
}, {timestamps:true})
const attendanceStatusModel = mongoose.model('attendanceStatus', attendanceStatusSchema)
module.exports=attendanceStatusModel