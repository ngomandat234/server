const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const agendaSchema = new Schema ({
    agenda_id:{
        type: String    
    },
    date: {
        type: Date
    },
    start_time: {
        type: Date
    },
    end_time:{
        type : Date
    }
}, {timestamps:true})
const agendaModel = mongoose.model('agenda', agendaSchema)
module.exports=agendaModel