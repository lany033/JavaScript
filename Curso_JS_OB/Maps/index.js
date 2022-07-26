//crear por fuera las variables para acceder al marker
let marker,map

function initMap(){
    const posicion= {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion inicial"
    })
    geoPosiciona()


}

function geoPosiciona() {

    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout:5000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalizacion")
    }
    
}

//Centrar el mapa con el set posicion
function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.error(error);
}