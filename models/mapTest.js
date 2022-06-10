const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const config = require('mongoose-schema-jsonschema/config');
const mapSchema = new Schema ({
    longtitude:{
        type:String
    },
    latitude:{
        type:String,
    }
}, {timestamps:true})
// const jsonSensorSchema = sensorSchema.jsonSchema();
const mapModel = mongoose.model('mapne', mapSchema)
module.exports=mapModel