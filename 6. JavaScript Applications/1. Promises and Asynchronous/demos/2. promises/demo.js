let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
    //cleaning
    let isClean = false; //false for rejected

    if (isClean) {
        resolve('Clean');
    }
    else{
        reject('Not Clean');
    }
});

//promise is resolve with callback fn
promiseToCleanTheRoom.then(function (fromResolve) { //fromResolve === 'Clean'
    console.log('The room is ' + fromResolve);
}).catch(function (fromReject) {
    console.log('The room is ' + fromReject);
});