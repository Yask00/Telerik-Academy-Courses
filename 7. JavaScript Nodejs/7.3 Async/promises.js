let pr = new Promise ((resolveCb, rejectCb) => {
    //async opertaion
});

const waitSeconds = (seconds) => {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, seconds * 1000);
    })
}

waitSeconds(2)
    .then(() => {
        //success function
        console.log('1');
        return waitSeconds(5);
    }) 
    .then(() => {
        //success function
        console.log('2');
        return waitSeconds(5);
    }) 
    .catch(() => {
        //error handling
    });