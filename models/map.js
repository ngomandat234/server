// const mongoose = require('mongoose')
// const geocoder = require ("../utils/geocoder")
// const mapSchema = new mongoose.Schema({
//     // id : {
//     //     type : String,
//     //     required : [true, 'Please store a ID'],
//     //     unique:true,
//     //     trim:true,
//     //     maxlength: [10]
//     // },
//     // address:{
//     // longtitude: {
//     //     type: String,
//     //     required:true
//     // },
//     // latitude: {
//     //     type: String,
//     //     required:true
//     // },
//     // },
//     // address : {
//     //     type:String,
//     //     required : true
//     // },
//     longtitude: {
//         type: Number,
//         required:true
//     },
//     latitude: {
//         type: Number,
//         required:true
//     },
//     location : {
//         type : {
//             type: String,
//             enum: ['Point'],
//           //  required:true
//         },
//         coordinates: {
//             type : [Number],
//             index : 'map'
//         },
//        // formattedAddress : String
//     },
//     createdAt: {
//         type : Date,
//         default : Date.now  
//     }
    
// })
// mapSchema.pre("save", async function(next){
//  // const loc = [this.longtitude,this.latitude]
//    // const loc = await geocoder.geocode(this.address)
//    const long = await geocoder.geocode(this.longtitude)
//    const lat = await geocoder.geocode(this.latitude)
//     //const loc = await geocoder.geocode(this.longtitude, this.latitude)
//    // console.log ( JSON.stringify(loc)  + "loc ne")
// //    const long = this.longtitude
// //    const lat = this.latitude
//     this.location = {
//      type: "Point",
//        //coordinates : [loc[0].longitude, loc[1].latitude],
//         coordinates : [long, lat],
//         //formattedAddress : loc[0].formattedAddress
//     }
//    // console.log("location ne " + location)
//     console.log("langtitude ne " + this.latitude)
//     //this.address = undefined;
//     // this.longtitude = undefined;
//     // this.latitude = undefined;
//     this.longtitude = undefined;
//     this.latitude = undefined;
//     next()
// })
// module.exports = mongoose.model("Map", mapSchema)

const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const mapSchema = new mongoose.Schema({
//   storeId: {
//     type: String,
//     required: [true, 'Please add a store ID'],
//     unique: true,
//     trim: true,
//     maxlength: [10, 'Store ID must be less than 10 chars']
//   },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: 'map'
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Geocode & create location
mapSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model('map', mapSchema);