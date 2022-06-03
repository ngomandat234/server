const testMap = require("../models/mapTest")
//  const getMap = async (req,res,next) =>{
//      try {
//          const maps = await map.find()
//          return res.status(200).json({
//              success:true,
//              count : maps.length,
//              data : maps
//          })
//      }
//      catch (err){
//         return res.status(500).json({'Error' : err})
//      }
//  }

 const getMap = async(req,res,next) => {
    testMap.find()
     .then ((respond)=>{
         res.status(200).json(respond)
     })
     .catch ((err)=> {
         res.status(500).json({error:err})
     })
 }

 const addMap = async(req,res,next) => {
    try{
        const newTestMap = new testMap({
            longtitude : req.body.longtitude,
            latitude: req.body.latitude
        })
        await newTestMap.save()
       res.json({message:"Add map Successfully"})
    
        }
        catch (err) {
            res.json({message:"An Error Occured"})
        }
    
 }

 module.exports = {getMap,addMap}