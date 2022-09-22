var socket = io.connect('http://localhost:3001');
$(document).ready(function () {
    var elem = document.createElement("img");
    socket.on('showimg',()=>{
        elem.src = 'resized.png';
        document.getElementById("img").appendChild(elem);
    })
})