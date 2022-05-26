var socket = io.connect('http://localhost:3001');
$(document).ready(function () {
    if(socket !== undefined){
        console.log('Connected to socket...');
        // Handle Output
        socket.on('changeData', function(data){
            $('#map').append(`${data}`)
        });
    }
})