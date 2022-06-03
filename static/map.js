// $(function () {
//   var socket = io.connect("http://localhost:3001");
//   $(document).ready(function () {
//     if (socket !== undefined) {
//       console.log("Connected to socket...");
//       // Handle Output
      
//     }
//     socket.on("marker", function (data) {
//     const myElement = document.getElementById("sethPhatMap");
//     // $('#sethPhatMap').append(`${data}`)
//     console.log(myElement + "myele");
//     myElement.append(`${data}`);
//     // socket.emit("marker", data)
//     });
//   });
// });
	
$(function () {
    var mapObj = null;
	var defaultCoord = [10.870231, 106.800836]; // coord mặc định, 9 giữa HCMC
	var zoomLevel = 13;
	var mapConfig = {
		attributionControl: false, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
		center: defaultCoord, // vị trí map mặc định hiện tại
		zoom: zoomLevel, // level zoom
	};
    const socket = io("http://localhost:3001")
    
    var datasetLong = [];
    var datasetLat = [];
    socket.on("firstConnect", (data) => {
        var longne;
        var latne;
      data.forEach(element => { //10 9 8 7 6 =>  7 8 9 10 11
      longne=  datasetLong.unshift(element.longtitude);
        latne = datasetLat.unshift(element.latitude);
        window.onload = async function() {
            // init map
            mapObj = L.map('sethPhatMap', mapConfig);
            
            // add tile để map có thể hoạt động, xài free từ OSM
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapObj);
            
            // tạo marker
            var popupOption = {
                  className: "map-popup-content",
            };
            console.log(longne + "vitridau")
            addMarker([longne,latne], `<div class='left'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGNN50inDZcOweium4llf4qacFBFgBK9sXW7fxQ_lBm6-Abcww' /></div><div class='right'><b>Đạt Đẹp Troai</b><br>Đây là vị trí của bạn nè</div><div class='clearfix'></div>`, popupOption);
            //var marker = addMarker([data[2].lat,data[2].long], `<div class='left'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGNN50inDZcOweium4llf4qacFBFgBK9sXW7fxQ_lBm6-Abcww' /></div><div class='right'><b>Đây có gì hot?</b><br>Đây là vị trí của bạn nè</div><div class='clearfix'></div>`, popupOption);
        };
        function addMarker(coord, popupContent, popupOptionObj, markerObj) {
            if (!popupOptionObj) {
                popupOptionObj = {};
            }
            if (!markerObj) {
                markerObj = {};
            }
            
            var marker = L.marker(coord, markerObj).addTo(mapObj); // chơi liều @@
            var popup = L.popup(popupOptionObj);
            popup.setContent(popupContent);
            
            // binding
            marker.bindPopup(popup);
            
            return marker;
        }	
      });
        })
    socket.on("newData", (data) => {
      console.log(data)
      Update(data.longtitude,data.latitude)
      
    //   const myElement = document.getElementById("sethPhatMap");
    //   myElement.append(`${data}`);
    })
    function Update(longtitude,latitude) {
     var longne=  datasetLong.push(longtitude)
     var latne =  datasetLat.push(latitude)
      window.onload = async function() {
        // init map
        mapObj = L.map('sethPhatMap', mapConfig);
        
        // add tile để map có thể hoạt động, xài free từ OSM
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapObj);
        
        // tạo marker
        var popupOption = {
              className: "map-popup-content",
        };
        console.log(longne + "vitrinew")
        addMarker([longne,latne], `<div class='left'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGNN50inDZcOweium4llf4qacFBFgBK9sXW7fxQ_lBm6-Abcww' /></div><div class='right'><b>Đạt Đẹp Troai</b><br>Đây là vị trí của bạn nè</div><div class='clearfix'></div>`, popupOption);
        //var marker = addMarker([data[2].lat,data[2].long], `<div class='left'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SGNN50inDZcOweium4llf4qacFBFgBK9sXW7fxQ_lBm6-Abcww' /></div><div class='right'><b>Đây có gì hot?</b><br>Đây là vị trí của bạn nè</div><div class='clearfix'></div>`, popupOption);
    };
    function addMarker(coord, popupContent, popupOptionObj, markerObj) {
        if (!popupOptionObj) {
            popupOptionObj = {};
        }
        if (!markerObj) {
            markerObj = {};
        }
        
        var marker = L.marker(coord, markerObj).addTo(mapObj); // chơi liều @@
        var popup = L.popup(popupOptionObj);
        popup.setContent(popupContent);
        
        // binding
        marker.bindPopup(popup);
        
        return marker;
    }	
    }
  })
  