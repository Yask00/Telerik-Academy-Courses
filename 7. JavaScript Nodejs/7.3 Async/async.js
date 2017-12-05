const waitSeconds = (seconds) => {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, seconds * 1000);
    })
}


// const f = async () => {
//     await(waitSeconds(1));
//     console.log('1');

//     await(waitSeconds(2));
//     console.log('2');
    
//     await(waitSeconds(3));
//     console.log('3');
// };

// f();


const asyncOperation = async (param) => {
    await waitSeconds(2);
    console.log('ready');
    return param;
};


const main = async () => {
    const result = await asyncOperation(5);
    console.log(result);
};

main();