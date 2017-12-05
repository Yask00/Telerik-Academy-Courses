var promise = new Promise ((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos); 
        },
        (error) => {
            reject('User did not share current position');
        }
    );
});

function getCoords (pos) {
    return {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
    };
}

function createImg (pos) {
    var img = document.getElementById('myPosition');
    img.src = `http://maps.googleapis.com/maps/api/staticmap?center=${pos.lat},${pos.long} 
        &zoom=18
        &size=500x500
        &markers=color:red%7Clabel:HHH%7C${pos.lat},${pos.long}
        &sensor=false`; 

    return img;
}

promise.then(getCoords)
        .then(createImg)
        .catch(err => alert(err)); //click block to see the popup 





