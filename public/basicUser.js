$(document).ready(function () {
    const form = document.querySelector('form')
    const name = document.querySelector('#name')
    const id = document.querySelector('#id')
    const subject = document.querySelector('#subject')
    const teacher = document.querySelector('#teacher')
    const time = document.querySelector('#time')
    const delForm = document.querySelector('#delForm')
    const delId = document.querySelector('#delId')
    form.addEventListener('submit', async (e) => {
       e.preventDefault()     
       try {
         const res = await fetch('/user/attendence', {
         method: 'POST',
         body: JSON.stringify({ name: name.value , id: id.value, subject: subject.value, teacher:teacher.value, time:time.value}),
         headers: { 'Content-Type': 'application/json' }
         })   
         console.log(name.value);
          } catch (err) {
            console.log(err.message)
          }
        })
    delForm.addEventListener('submit', async (e) => {
        e.preventDefault()     
        try {
            const res = await fetch('/user/deleteAttendence', {
             method: 'POST',
             body: JSON.stringify({id: delId.value}),
             headers: { 'Content-Type': 'application/json' }
             }) 
             console.log(delId.value);  
              } catch (err) {
                console.log(err.message)
              }
             })
})