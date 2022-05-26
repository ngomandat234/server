const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const config = require('mongoose-schema-jsonschema/config');
const rfidSchema = new Schema ({
    time:{
        type:String
    },
    id:{
        type:String,
    }
}, {timestamps:true})
// const jsonSensorSchema = sensorSchema.jsonSchema();
const rfidModel = mongoose.model('Rfid', rfidSchema)
module.exports=rfidModel