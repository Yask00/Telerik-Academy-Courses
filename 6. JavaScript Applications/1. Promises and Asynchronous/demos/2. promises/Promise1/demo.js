const getANumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = (Math.random() * 6 + 1) | 0; //from 1 to 6 incl

        if (number >= 5) {
            resolve(number);
        }
        else{
            reject('Small number');
        }   
    }, 1000);
});

getANumber.then( // 2 functions in then
    number => console.log(number),
    number => console.log('Small number')
    );
        