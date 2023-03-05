var socket = io.connect('http://localhost:3001');

$(document).ready(function () {
    var elem = document.createElement("img");
    socket.on('showimg',(data)=>{
        // console.log(data)
        $('#img').textContent ='';
        const buffer = Buffer.from(data, "base64");  
        Jimp.read(buffer, (err, res) => {
            res.getBase64Async(jimp.MIME_PNG).then(newImage => {
            elem.src = newImage;
            // document.getElementById("img-container").append(tag)
            document.getElementById("img").appendChild(elem);
          })
        })
        // const buffer = Buffer.from(data, "base64");  
        // elem.src = data;
        
    })
})