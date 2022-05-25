const map = require("../models/map")
 const getMap = async (req,res,next) =>{
     try {
         const maps = await map.find()
         return res.status(200).json({
             success:true,
             count : maps.length,
             data : maps
         })
     }
     catch (err){
        return res.status(500).json({'Error' : err})
     }
 }
 const addMap = async(req,res,next) => {
     try{
        const maps = await map.create(req.body)
        return res.status(200).json({
            success:true,
            data:maps
        })
     }
     catch(err){
         console.log(err)
         res.status(500).json({"error " : err})
     }
 }
//  const addMap = async(req,res,next) => {
//     try{
//     const maps= new map({
//        longtitude: req.body.longtitude,
//        latitude: req.body.latitude
//     })
//     console.log(maps)
//     await maps.save()
//    res.json({message:"Add location Successfully"})

//     }
//     catch (err) {
//         res.json({message:"An Error Occured"})
//     }

// }
 module.exports = {getMap,addMap}