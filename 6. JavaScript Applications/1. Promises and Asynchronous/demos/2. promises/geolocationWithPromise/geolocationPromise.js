(function () {
    var myPromise = new Promise((resolve, reject) => {
        //all that is asynchronous goes here:
        navigator.geolocation.getCurrentPosition((pos) => {
            //console.log(pos); //OBJECT with values
            resolve(pos);
        });
        //can have something for reject
    });

    function parsePosition(pos) {
        return {
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        };
    }

    function displayMap(pos) {
        var map = document.getElementById('map'),
            src = `http://maps.googleapis.com/maps/api/staticmap?center=${pos.lat},${pos.long}
        &zoom=17&size=500x500&sensor=false`; //zaqvka
        map.setAttribute('src', src);

        return map;
    }

    function wait(time, map) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(map);
            }, time);
        });
    }

    function fadeout(mapEl) {
        mapEl.style.display = 'none';
    }

    
    myPromise   //without ()
        .then(parsePosition)
        .then(displayMap)
        .then((map) => wait(3000, map))
        .then(fadeout)
        .catch((err) => { });
 
})();