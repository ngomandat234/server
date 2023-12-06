var socket = io.connect('http://192.168.137.1:3001', { transports : ['websocket'] });
$(document).ready(function () {
    const form = document.querySelector('form')
    const name = document.querySelector('#name')
    const id = document.querySelector('#id')
    const mssv = document.querySelector('#mssv')
    const subject = document.querySelector('#subject')
    const teacher = document.querySelector('#teacher')
    const time = document.querySelector('#time')
    const updtname = document.querySelector('#updateName')
    const updtmssv = document.querySelector('#updateMssv')
    const updtid = document.querySelector('#updateId')
    const updtsubject = document.querySelector('#updateSubject')
    const updtteacher = document.querySelector('#updateTeacher')
    const updttime = document.querySelector('#updateTime')
    const delForm = document.querySelector('#delForm')
    const delId = document.querySelector('#delId')
    const updtForm = document.querySelector('#updtForm')
    const table = document.getElementById('example');
    var currentData;
    if(socket !== undefined){
      console.log('Connected to socket...');
      // Handle Output
      var elem;
      var buffer;
      var idd;
      var ImgCell; 
      var replacedTime;
      socket.emit('requestChangeData', ({class_id: "CE206.O11", date: new Date("2023/12/05")}))
      
      socket.on('triggerChangeData',  function (){socket.emit('requestChangeData', ({class_id: "CE206.O11", date: new Date("2023/12/05")}))})
      socket.on('changeData', async function (data){
        console.info(data)
        currentData = data;
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        // $('#studentsList').empty()
        if(data.length){       
          for(var x = 0; x < data.length; x++)
          {
            if(data[x].time.length > 0) 
              replacedTime = data[x].time[0].replace(/\s/g, "_");
            await $('#studentsList').append(` <tr>
                                              <th scope="row" class="sorting_1">${(x+1)}</th>
                                              <td>${data[x].id}</td>
                                              <td>${data[x].name}</td>
                                              <td>${data[x].mssv}</td>
                                              <td>${data[x].subject}</td>
                                              <td>${data[x].teacher}</td>
                                              <td>${data[x].time.length > 0 ? data[x].time[0] : ""}</td>
                                              <td class = "t${data[x].time.length > 0 ? data[x].image[0] : ""}"></td>
                                              </tr>`);
            for (var i = 1; i < data[x].time.length; i++)
            {
              replacedTime = data[x].time[i].replace(/\s/g, "_");
              await $('#studentsList').append(` <tr>
                                                <th scope="row" class="sorting_1"></th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>${data[x].time[i]}</td>
                                                <td class = "t${data[x].image[i]}"></td>
                                                </tr>`);
            }
            if(data[x].time.length && data[x].time[0] != '' )
            {
              for (var i = 0; i < data[x].time.length; i++)
              {
                replacedTime = data[x].time[i].replace(/\s/g, "_");
                await socket.emit('requestImg', data[x].image[i]);
                // ImgCell = await document.querySelector(`.t${data[x].image[i]}`);
                // ImgCell.innerHTML = `<img src="images/${data[x].image[i]}">`;
                // const imgTag = document.createElement("img");
                // imgTag.src = "images/"+data[x].image[i];
                // ImgCell.appendChild(imgTag);
              }
            }
          } 
                } else { $('#cmn').append(`<tr>
                    <td colspan="12">${'There no one at all'}</td>
                    </tr>`)}
      });
      socket.on('image-data', imageData => {
        if (imageData.image) {
          // replacedTime = imageData.time.replace(/\s/g, "_");
          ImgCell = document.querySelector(`.t${imageData.time}`);
          ImgCell.innerHTML = `<img src="${imageData.image}">`;
          // const imgTag = document.createElement("img");
          // imgTag.src = imageData.image;
          // ImgCell.appendChild(imgTag);
        }
      });
      // socket.on('updateImage', (data)=>{
      //   for(var y = 0;y < data.length;y++){
      //   if (data[y].image) {
      //     // console.log(data[y].image);
      //     idd = "img"+y
      //     console.log(idd)
      //     elem = document.createElement("img");
      //     buffer = Buffer.from(data[y].image, "base64");  
      //     Jimp.read(buffer,  (err, res) => {
      //         res.getBase64Async(jimp.MIME_PNG).then((newImage) => {
      //         elem.src = newImage;  
      //         document.getElementById(idd.toString()).appendChild(elem);
      //       })
      //     })
      //   }
      // }})
      socket.on('changeTemHum', (data)=>{
        $('#TempHum').empty()
        $('#TempHum').append(`<div>🌡 Temp: ${data.temp}°C 💧 Hum: ${data.humidity}%</div>`)
      })
  }
    form.addEventListener('submit', async (e) => {
       e.preventDefault()     
       try {
            const res = await fetch('/user/attendance', {
              method: 'POST',
              body: JSON.stringify({ name: name.value , id: id.value, mssv: mssv.value, subject: subject.value, teacher:teacher.value, time:time.value}),
              headers: { 'Content-Type': 'application/json' }
              })  
          } catch (err) {
            console.log(err.message)
          }
        })
    delForm.addEventListener('submit', async (e) => {
        e.preventDefault()     
        try { 
              const res = await fetch('/user/deleteAttendance', {
              method: 'POST',
              body: JSON.stringify({id: delId.value}),
              headers: { 'Content-Type': 'application/json' }
              }) 

              } catch (err) {
                console.log(err.message)
              }
             })
    updtForm.addEventListener('submit', async (e) => {
      e.preventDefault()     
      try {
        currentData.forEach( async (element) => {
          if (element.id == updtid.value)
          {
            const res = await fetch('/user/updateStudent', {
            method: 'POST',
            body: JSON.stringify({ name: updtname.value , id: updtid.value, mssv: updtmssv.value, subject: updtsubject.value, teacher:updtteacher.value, time:updttime.value, previous: element}),
            headers: { 'Content-Type': 'application/json' }
            })   
          }
        });
         } catch (err) {
           console.log(err.message)
         }
       })
             
    // display.textContent = ''
    const logOut = document.getElementById("buttonID")
    logOut.addEventListener("click", async(e)=> {
     e.preventDefault()
     try {
         await fetch('/auth/logout', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' }
         })
       //const data = await res.json()
       window.location.href = "http://localhost:3001/user/login";
     }
       catch(err){
         throw err
     }
     // e.clearCookie("token")
     // window.location.href = "http://localhost:3001/user/login";
   })
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].nextElementSibling.style.display = "none"
    }
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }

      });
    }
})