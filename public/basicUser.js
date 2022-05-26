var socket = io.connect('http://localhost:3001');
$(document).ready(function () {
    const form = document.querySelector('form')
    const name = document.querySelector('#name')
    const id = document.querySelector('#id')
    const subject = document.querySelector('#subject')
    const teacher = document.querySelector('#teacher')
    const time = document.querySelector('#time')
    const delForm = document.querySelector('#delForm')
    const delId = document.querySelector('#delId')
    if(socket !== undefined){
      console.log('Connected to socket...');
      // Handle Output
      socket.on('changeData', function(data){
          $('#studentTable').empty()
                  $('#studentTable').append(`<tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Time</th>
                  </tr>`)
          if(data.length){       
              for(var x = 0;x < data.length;x++){
                  console.log("hehe  ");
                  $('#studentTable').append(`<tr>
                  <th>${(x+1)}</th>
                  <th>${data[x].id}</th>
                  <td>${data[x].name}</td>
                  <td>${data[x].subject}</td>
                  <td>${data[x].teacher}</td>
                  <td>${data[x].time}</td>
                   </tr>`);
              }
          } else { $('#studentTable').append(`<tr>
          <td colspan="3">${'There no one at all'}</td>
         </tr>`)
          }
      });
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
})