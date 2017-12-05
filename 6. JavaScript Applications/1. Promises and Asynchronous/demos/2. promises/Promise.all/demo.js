function wait (ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

const beginTime = new Date();

const promises = [
    wait(2000),
    wait(1500),
    wait(500)
];

Promise.all(promises)
    .then(() =>{
        const endTime = new Date();
        console.log(endTime - beginTime);
    });