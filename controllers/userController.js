const user = require('../models/userModel')
const student = require('../models/attedence')
const sensor = require('../models/sensor')
const rfid = require('../models/rfid')
const {google} = require('googleapis');
const sheets = require('./sheetsController')
const ExcelJS = require('exceljs');
const index = require('../models/index')
// const auth = new google.auth.GoogleAuth({
//     keyFile: "keys.json", //the key file
//     //url to spreadsheets API
//     scopes: "https://www.googleapis.com/auth/spreadsheets", 
// });
// const authClientObject = auth.getClient();

// //Google sheets instance
// const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

// // spreadsheet id
// const spreadsheetId = "1FFVdpNqWv8Rd3CR1rGW4NN-DLeqwjeKzBgEIeHZqk-Y";
const readExcelAndSaveToMongoDB = async(req,res,next) => { 
    // Đường dẫn đến file Excel
    const filePath = './controllers/data.xlsx';
  
    // Đọc dữ liệu từ file Excel
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
  
    // Lặp qua từng dòng trong file Excel và lưu vào MongoDB
    try
    {
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            const mssv = row.getCell(2).value;
            const id = row.getCell(3).value;
            const name = row.getCell(4).value;
            console.log(mssv + " "+ id + " " + name)
            
            const newStudent = new student({
                id: id != "" ? id.toUpperCase() : id,
                name: name,
                mssv: mssv
            })
            newStudent.save()
            console.log("Create student Successfully")
    })
    res.json({message:"Create student Successfully"})
    }
    catch (err) 
    {
        res.json({message:"An Error Occured"})
    }   
    //   // Lưu dữ liệu vào MongoDB
    //   collection.insertOne({ mssv, id, hoten }, (error, result) => {
    //     if (error) {
    //       console.error(`Lỗi lưu dữ liệu dòng ${rowNumber}:`, error);
    //     } else {
    //       console.log(`Đã lưu dòng ${rowNumber} vào MongoDB`);
    //     }
    //   });
    // });
}
const readExcelAndDelete = async(req,res,next) => { 

    const filePath = './controllers/data.xlsx';

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
    try
    {
        worksheet.eachRow({ includeEmpty: false }, async(row, rowNumber) => {
            const id = row.getCell(3).value;
            console.log(id)
            
            const newStudent = new student({
                id: id,
            })
            await student.findOneAndRemove({id: id})
            console.log("Delete student Successfully")
    })
    res.json({message:"Create student Successfully"})
    }
    catch (err) 
    {
        res.json({message:"An Error Occured"})
    }   
}
const findUserData = (req,res,next)=>{
    user.find()
    .then ((respond)=>{
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}
const getFeature = (req,res,next)=>{
    index.student.find().select('card_id facial_recognition_data name student_id -_id')
    .then ((respond)=>{
        // console.info(respond)
        // const filteredObjects = respond.filter(obj => obj.facial_recognition_data.length !== 0);
        // console.info(filteredObjects)
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}    
const getTable = async (req,res,next)=>{
    var data = {
        class_id : req.body.class_id,
        date : new Date(req.body.date)
    }
    let data_students = [];
    var __subject, __teacher;

    try {
        const _class = await new Promise((resolve, reject) => {
            index.class.findOne({ class_id: data.class_id }, (err, _class) => {
                if (err) {
                    console.log("DB not have this class");
                    reject(err);
                }
                resolve(_class);
            });
        });

        if (_class) {
            const _subject = await new Promise((resolve, reject) => {
                index.subject.findOne({ subject_id: _class.subject_id }, (err, _subject) => {
                    if (err) {
                        console.log("DB not have this subject");
                        __subject = "";
                        reject(err);
                    }
                    __subject = _subject.name;
                    resolve(_subject);
                });
            });

            const _teacher = await new Promise((resolve, reject) => {
                index.teacher.findOne({ teacher_id: _class.teacher_id }, (err, _teacher) => {
                    if (err) {
                        console.log("DB not have this teacher");
                        __teacher = "";
                        reject(err);
                    }
                    __teacher = _teacher.name;
                    resolve(_teacher);
                });
            });

            for (const _student_id of _class.student_ids) {
                const _student = await new Promise((resolve, reject) => {
                    index.student.findOne({ student_id: _student_id }, (err, _student) => {
                        if (err) {
                            console.log("DB not have this student");
                            reject(err);
                        }
                        resolve(_student);
                    });
                });

                if (_student) {
                    var data_student = {
                        id: _student.card_id,
                        name: _student.name,
                        mssv: _student_id,
                        subject: __subject,
                        teacher: __teacher,
                        time: [],
                        image: []
                    };

                    for (const _attendance_status_id of _student.attendance_status_ids) {
                        const _attendance_status = await new Promise((resolve, reject) => {
                            index.attendanceStatus.findOne({ attendance_status_id: _attendance_status_id }, (err, _attendance_status) => {
                                let dateObject = new Date(data.date);
                                if (err) {
                                    console.log("DB not have this attendance status");
                                    reject(err);
                                }
                                if (_attendance_status.date.getDate() === dateObject.getDate() && _attendance_status.date.getMonth() === dateObject.getMonth() && _attendance_status.date.getFullYear() === dateObject.getFullYear()) {
                                    data_student.time.push(_attendance_status.status);
                                    data_student.image.push(_attendance_status.image);
                                    // console.info(data_student);
                                }
                                resolve(_attendance_status);
                            });
                        });
                    }

                    data_students.push(data_student);
                    
        
                    // console.info(data_students);
                }
            }
            res.status(200).json(data_students)
        }
    } catch (error) {
        res.status(500).json({error:err})
    }
}    
const showID = (req,res,next) =>{
    const userID = req.body.userID
    user.findById(userID)
    .then ((respond)=>{
        res.status(200).json(respond)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
    })
}

const addUser = async(req,res,next) => {
    try{
    const newUser = new user({
        name : req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    await newUser.save()
   res.json({message:"Add user Successfully"})

    }
    catch (err) {
        res.json({message:"An Error Occured"})
    }

}
const creatingSheet = async() => {
    // // Get metadata about spreadsheet
    // const sheetClear = await googleSheetsInstance.spreadsheets.values.clear({
    //     auth,
    //     spreadsheetId,
    //     range: "A1:F100",
    // });
    // let title = ['NO.', 'ID', 'NAME', 'SUBJECT', 'TEACHER', 'TIME'];
    // const sheetInfo = await googleSheetsInstance.spreadsheets.values.append({
    //     auth,
    //     spreadsheetId,
    //     range: "A:F",
    //     valueInputOption: "USER_ENTERED", 
    //     resource: {
    //         values: [title]
    //     },
    // });
    // // console.log(sheetInfo.data.values.length);
}
const updateUser = (req,res,next) => {
    const userID = req.body.userID
    let updateData = ({
        name : req.body.name,
        age: req.body.age,
        phone : req.body.phone
    })
    user.findByIdAndUpdate(userID, {$set:updateData})
    .then (()=>{
        res.json({message:"Update user Successfully"})

    })
    .catch ((err)=> {
        //res.status(500).json({error:err})
        res.json({message:"An Error Occured"})
    })
}
const deleteUser = (req,res,next) => {
    let userID = req.body.userID
    user.findByIdAndDelete(userID)
    .then (()=>{
        res.json({message:"Delete user Successfully"})
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
       // res.json({message:"An Error Occured"})
    })

}

const addStudent = async(req,res,next) => {
    console.log(req.body.name);
    try{
    const newStudent = new student({
        name : req.body.name,
        id: req.body.id,
        subject: req.body.subject,
        teacher: req.body.teacher,
        time: req.body.time
    })
    await newStudent.save()
    try{
        const list_students = await student.find().select('id -_id');
        // sheets.addSheet(list_students.length - 1, newStudent);
        }
    catch (err) {
        res.json({message:err})
    }
    res.json({message:"Check student Successfully"})
    console.log("Add student Successfully - Name : " + newStudent.name)
    }
    catch (err) {
        res.json({message:err})
    }
}
const delStudent = async(req,res,next) => {
    // reqq = JSON.parse(req.body.json)
    // const studentID = reqq.id
    // student.countDocuments({id: studentID}, function (err, count){ 
    //     if(count>1){   
    //         student.findOneAndRemove({id: studentID})
    //         .then (()=>{
    //             res.json({message:"Delete user Successfully"})
    //         })
    //         .catch ((err)=> {
    //             res.status(500).json({error:err})
    //             res.json({message:"An Error Occured"})
    //         })
    //     }else {      
    //                 res.json({message:"An Error Occured"})
    //     }
    // });  
    let studentID = req.body.id
    await student.findOneAndRemove({id: studentID})
    .then (async()=>{
        try{
            const list_students = await student.find().select('id name subject teacher time -_id');
            // sheets.reloadSheet(list_students);
            }
        catch (err) {
            res.json({message:err})
        }
        res.json({message:"Delete user Successfully"})
        console.log("Delete student Successfully - ID : " + studentID)
    })
    .catch ((err)=> {
        res.status(500).json({error:err})
        res.json({message:"An Error Occured"})
    })
    
}
// const updateAndCreateStudent = async(req,res,next) => {  
//     console.log(req.body);
//     reqq = JSON.parse(req.body.json)
//     const studentID = reqq.id
//     console.log(reqq);
//     if(studentID != ""){
//     student.countDocuments({id: studentID}, function (err, count){ 
//         if(count > 0)
//         {   
//             // let updateData = ({
//             //     //feature: reqq.feature,
//             //     time: reqq.time
//             // })
//             // student.findOneAndUpdate({id:studentID}, {$set:updateData})
//             student.updateOne({id:studentID}, {$push: {feature: reqq.feature}})
//                 .then (()=>{
//                     res.json({message:"Update student Successfully"})
//                 })
//                 .catch ((err)=> {
//                     res.json({message:"An Error Occured"})
//                 })
//         } 
//         else 
//         {
//             try{
//                 const newStudent = new student({
//                     id: reqq.id,
//                     name: reqq.time,
//                 })
//                 newStudent.save()
//                 try{
//                     const list_students = student.find().select('id -_id');
//                     // sheets.addSheet(list_students.length - 1, newStudent);
//                     }
//                 catch (err) {
//                     res.json({message:err})
//                 }
//                 res.json({message:"Create student Successfully"})
//                 }
//                 catch (err) {
//                     res.json({message:"An Error Occured"})
//                 }    
//         }
//     });  
// } else {
//     res.json({message:"ID is null!!!"})
// }
// }
const updateAndCreateStudent = async(req,res,next) => {  
    req_parse = JSON.parse(req.body.json)
    const studentID = req_parse.id
    console.log(req_parse);
    if(studentID != ""){
        index.student.countDocuments({card_id: studentID}, function (err, count){ 
            if(count > 0)
            {   
                // let updateData = ({
                //     //feature: req_parse.feature,
                //     time: req_parse.time
                // })
                // student.findOneAndUpdate({id:studentID}, {$set:updateData})
                index.student.updateOne({card_id:studentID}, {$push: {facial_recognition_data: req_parse.feature}})
                .then (()=>{
                    res.json({message:"Update student Successfully"})
                })
                .catch ((err)=> {
                    res.json({message:"An Error Occured"})
                })
            } 
            else 
            {
                try
                {
                    const newStudent = new index.student({
                        card_id: req_parse.id,
                        name: req_parse.time,
                    })
                    newStudent.save()
                    res.json({message:"Create student Successfully"})
                }
                catch (err) {
                    res.json({message:"An Error Occured"})
                }    
            }
        });  
    } else {
        res.json({message:"ID is null!!!"})
    }
}
const updateTimeStudent = async(req,res,next) => {
    // console.log(req);
    reqq = JSON.parse(req.body.json)
            const studentID = reqq.id
            let updateData = ({
                time: reqq.time
            })
            student.findOneAndUpdate({id:studentID}, {$set:updateData})
            .then (async()=>{
                res.json({message:"Update student Successfully"})
                console.log("Update time Successfully - ID : " + studentID)
            })
            .catch ((err)=> {
                res.json({message:"An Error Occured"})
            })
}
// const updateImage = async (req,res,next) =>{
//     reqq = JSON.parse(req.body.json)
//     const studentID = reqq.id
//     let updateData = ({
//         time: reqq.time,
//         image: reqq.img
//     })
//     student.findOneAndUpdate({id:studentID}, {$set:updateData})
//     .then (async()=>{
//         try{
//             const list_students = await student.find().select('id -_id');
//             list_students.forEach((element, index) => {
//                 if (element.id == studentID){
//                     sheets.updateTimeSheet(index, updateData);
//                 }
//         });
//             }
//         catch (err) {
//             res.json({message:err})
//         }
//         res.json({message:"Update student Successfully"})
//         console.log("Update time Successfully - ID : " + studentID)
//     })
//     .catch ((err)=> {
//         res.json({message:"An Error Occured"})
//     })
// }
const updateStudent = async(req,res,next) => {  
    const studentID = req.body.id
            let updateData = ({
                id: req.body.id,
                name: req.body.name == "" ? req.body.previous.name : req.body.name,
                subject: req.body.subject == "" ? req.body.previous.subject : req.body.subject,
                teacher: req.body.teacher == "" ? req.body.previous.teacher : req.body.teacher,
                time: req.body.time == "" ? req.body.previous.time : req.body.time
            })
            console.log(updateData)
            try
            {
                const list_students = await student.find().select('id -_id');
                list_students.forEach((element, index) => {
                    if (element.id == studentID){
                        // sheets.updateSheet(index, updateData);
                    }
                });
            //     // console.log(list_students)
            }
            catch (err) {
                res.json({message:err})
            }
            student.findOneAndUpdate({id:studentID}, {$set:updateData})
            .then (()=>{
                res.json({message:"Update student Successfully"})
                console.log("Update student successfully [] ID : " + studentID)
                // console.log("Succers")
                // console.log(updateData)
            })
            .catch ((err)=> {
                res.json({message:"An Error Occured"})
                // console.log("Failed")
                // console.log(updateData)
            })
        }
const addSensor = async(req,res,next) => {
    try{
    const newSensor = new sensor({
        temp : req.body.temp,
        humidity: req.body.humidity
    })
    await newSensor.save()
    res.json({message:"Add Sensor Successfully"})

    }
    catch (err) {
        res.json({message:"Error"})
    }

}

const showSensor = async(req,res,next) => {
       sensor.find()
        .then ((respond)=>{
            res.status(200).json(respond)
        })
        .catch ((err)=> {
            res.status(500).json({error:err})
        })
    }
const addRfid = async(req,res,next) => {
        try{
        const newRfid = new rfid({
            time : req.body.time,
            id: req.body.id
        })
        await newRfid.save()
       res.json({message:"Add ID Rfid Successfully"})
    
        }
        catch (err) {
            res.json({message:"Error"})
        }
    
    }
const showRfid = async(req,res,next) => {
           rfid.find()
            .then ((respond)=>{
                res.status(200).json(respond)
            })
            .catch ((err)=> {
                res.status(500).json({error:err})
            })
        }
module.exports = {findUserData,showID,addUser,updateUser,deleteUser,addStudent,updateTimeStudent,
                    delStudent,updateStudent,updateAndCreateStudent,addSensor,showSensor, addRfid, showRfid, getFeature, getTable,
                    creatingSheet, readExcelAndSaveToMongoDB, readExcelAndDelete}