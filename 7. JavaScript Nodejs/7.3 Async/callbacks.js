
setTimeout(() => {
    console.log('1');

    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
        }, 1000)
    }, 1000)

}, 1000)

const cbNodejs = (cb) => {
    cb(null, result);
};

cbNodejs((err, result) => {
    if(err){

    }
    //all fine
});