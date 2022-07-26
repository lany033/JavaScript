let markers, map

function initMap(){
    posicion = {
        lat: -22.95190484712188,
        lng: -43.21047190216203
    }

    map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: posicion
    })

    markers.push(
        new google.maps.Marker({
            position:{
                lat: -22.95190484712188,
                lng: -43.21047190216203,
            },
            map,
            title: "Cristo Redentor",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -13.114560860122927, 
                lng: -72.46649519311711, 
            },
            map,
            title: "Machu Picchu",
        })
    )
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -4.103496522508348, 
                lng: -81.04565987155688,
            },
            map,
            title: "Mancora",
        })
    )
}
