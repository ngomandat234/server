var socket = io.connect('http://localhost:3001');
$(document).ready(function () {
    const form = document.querySelector('form')
    const name = document.querySelector('#name')
    const id = document.querySelector('#id')
    const subject = document.querySelector('#subject')
    const teacher = document.querySelector('#teacher')
    const time = document.querySelector('#time')
    const updtname = document.querySelector('#updateName')
    const updtid = document.querySelector('#updateId')
    const updtsubject = document.querySelector('#updateSubject')
    const updtteacher = document.querySelector('#updateTeacher')
    const updttime = document.querySelector('#updateTime')
    const delForm = document.querySelector('#delForm')
    const delId = document.querySelector('#delId')
    const updtForm = document.querySelector('#updtForm')
    if(socket !== undefined){
      console.log('Connected to socket...');
      // Handle Output
      socket.on('changeData', function(data){
          $('#studentsList').empty()
          if(data.length){       
                  for(var x = 0;x < data.length;x++){
                      $('#studentsList').append(`<tr>
                      <th scope="row" class="sorting_1">${(x+1)}</th>
                      <td>${data[x].id}</td>
                      <td>${data[x].name}</td>
                      <td>${data[x].subject}</td>
                      <td>${data[x].teacher}</td>
                      <td>${data[x].time}</td>
                       </tr>`);
                  }} else { $('#cmn').append(`<tr>
                    <td colspan="12">${'There no one at all'}</td>
                   </tr>`)}
      });
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
         body: JSON.stringify({ name: name.value , id: id.value, subject: subject.value, teacher:teacher.value, time:time.value}),
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
        const res = await fetch('/user/updateStudent', {
        method: 'POST',
        body: JSON.stringify({ name: updtname.value , id: updtid.value, subject: updtsubject.value, teacher:updtteacher.value, time:updttime.value}),
        headers: { 'Content-Type': 'application/json' }
        })   
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