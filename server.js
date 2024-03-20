const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const student = require('./models/attedence')
const index = require('./models/index')
const authUser = require('./routers/auth')
//const authUser = require('./routers/auth')(aa)
const path = require("path")
const cookieParser = require('cookie-parser')
const cookieSession = require("cookie-session");
const PORT = process.env.PORT ||  3001
const mongoose = require('mongoose');
var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));
app.use(
    cookieSession({
      name: "attendance-session",
      keys: ["COOKIE_SECRET"], // should use as secret environment variable
      httpOnly: true
    })
  );
//const URI = 'mongodb://localhost:27017/testdb'

// const URI = 'mongodb+srv://1111:1234@mernprojectceec.byvhv.mongodb.net/MERN_PROJECTCEEC?retryWrites=true&w=majority' 
const URI = "mongodb+srv://1111:1234@cluster0.lxqs9wg.mongodb.net/?retryWrites=true&w=majority"
// const URI = 'mongodb+srv://1111:1234@mernprojectceec.byvhv.mongodb.net/?retryWrites=true&w=majority' 
// const options = {
//   key: fs.readFileSync("/"),
//   cert: fs.readFileSync('C:/Users/lemin/cert.pem')
// }; 
// var server = require("https").Server(options,app)
var server = require("http").Server(app)
var io = require("socket.io")(server)
const user = require('./routers/user')(io)
mongoose
.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connect to db")
    //InitRole()
    server.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb", parameterLimit: 100000}))
//app.use(cors())
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));
app.use('/user',user)
app.use('/auth',authUser)
app.use(cookieParser())
// app.engine('hbs', handlebars({
//     extname : '.hbs',
//     helpers: {
//         sum: (a,b) => a+b
//     }
// }));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/user',express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
const db = require("./models");
const Role = db.roleUser;

io.on('connection', function (socket) {
    console.log('Socket connected');
    socket.on('id', (data)=>{
        // console.log(data);
        io.emit('send_id', {id: (data.id).toString()});
    })  
    socket.on('sendSignal', (data)=>{
        // console.log(data[15].image);
        io.emit('updateImage', data);
    })  
    socket.on('requestImg',(data)=>{
        const nameImg = data + ".png";
        var imageData = {
            image: 'images/' + nameImg,
            time: data
        }
        // console.log(imageData.image)
        io.emit('image-data', imageData)
    })
    socket.on('requestChangeData', async (data) => {
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
                                index.attendanceStatus.findOne({ attendance_status_id: _attendance_status_id }, (err, __attendance_status) => {
                                    let dateObject = new Date(data.date);
                                    if (err) {
                                        console.log("DB not have this attendance status");
                                        reject(err);
                                    }
                      
                                    if (__attendance_status.date.getDate() === dateObject.getDate() && __attendance_status.date.getMonth() === dateObject.getMonth() && __attendance_status.date.getFullYear() === dateObject.getFullYear()) {
                                        data_student.time.push(__attendance_status.status);
                                        data_student.image.push(__attendance_status.image);
                                        // console.info(data_student);
                                    }
                                    resolve(__attendance_status);
                                
                                });
                            });
                        }
    
                        data_students.push(data_student);
                        
         
                        // console.info(data_students);
                    }
                }
    
                await io.emit('changeData', data_students);
            }
        } catch (error) {
            console.error(error);
        }
    });
});
const collections = [index.attendanceStatus, index.student, index.class, index.subject, index.teacher];
const changeStreams = collections.map(collection => collection.watch());

changeStreams.forEach((changeStream, index) => {
    changeStream.on('change', async change => {
        io.emit(`triggerChangeData`);
        // Handle other actions related to the specific collection change
    });
});
// const changeStream = index.attendanceStatus.watch();
// changeStream.on('change', async(change) => {
//     io.emit('triggerChangeData');
//     // const list_students = await student.find().select('id name mssv subject teacher time image -_id');
//     // // console.log(change); // You could parse out the needed info and send only that data. 
//     // // console.log(list_students)
//     // io.emit('changeData', list_students);
// }); 
// function InitRole() {
//     Role.estimatedDocumentCount((err, count) => {
//       if (!err && count === 0) {
//         new Role({
//           name: "user"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
//           console.log("added 'user' to roles collection");
//         });
//         new Role({
//           name: "admin"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
//           console.log("added 'admin' to roles collection");
//         });
//       }
//     });
//   }

// server stream
// const NodeMediaServer = require('node-media-server');
// const config = {
//   logType: 3,
//   rtmp: {
//     port: 1935,
//     // chunk_size: 60000,
//     chung_size:4096,
//     //gop_cache: true,
//     gop_cache: false,
//     //ping: 30,
//     ping: 1,
//     ping_timeout: 1
//     //ping_timeout: 60
//   },
//   http: {
//     port: 3000,
//     mediaroot: './media',
//     allow_origin: '*',
//     api: true,
//     webroot: './www',
//   },
//   trans: {
//     ffmpeg: 'C:/ProgramData/chocolatey/bin/ffmpeg.exe',
//     tasks: [
//       {
//         app: 'live',
//         mp4: true,
//         mp4Flags: '[movflags=frag_keyframe+empty_moov]',
//       }
//     ]
//   }
// };

// var nms = new NodeMediaServer(config)
// nms.run()


// nms.on('preConnect', (id, args) => {
//     console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//     // const file = fs.createWriteStream("video.mp4");
//     // const request = http.get('http://localhost:3000/live/STREAM_NAME.flv', function(response) {
//     //    response.pipe(file);
//     //    // after download completed close filestream
//     //    file.on("finish", () => {
//     //        file.close();
//     //        console.log("Download Completed");
//     //    });
//     // });
//   });
  
//   nms.on('postConnect', (id, args) => {
//     console.log('[NodeEvent on postConnect1]', `id=${id} args=${JSON.stringify(args)}`);
    
//   });
  
//   nms.on('doneConnect', (id, args) => {
//     console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
   
//   });
  
//   nms.on('prePublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on prePublish2]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//   });
  
//   nms.on('postPublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on postPublish3]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // setInterval(function(){
     
//     //   console.log("sau 15 ne")
//     // }, 15000);
    
//   nms.on('donePublish', (id, StreamPath, args) => {
//     console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//   });
  
//   nms.on('prePlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//     // let session = nms.getSession(id);
//     // session.reject();
//   });
  
//   nms.on('postPlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    
//   });
  
//   nms.on('donePlay', (id, StreamPath, args) => {
//     console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
//   });
// })