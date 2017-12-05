const isMomHappy = true;
//const isMomHappy = false;

//Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    }
    else {
        const reason = new Error('mom is not happy');
        reject(reason);
    }
});

const showOff = function (phone) {
    const message = 'Hey, i have a new ' +
          phone.color + ' ' + phone.brand + ' phone';
    return message; //return Promise.resolve(message);    
};

//Call our Promise
const askMom = function  () {
    willIGetNewPhone
        .then(showOff) // prob .then(showOff) === .then(showOff(phone))
        .then(fulfilled => console.log(fulfilled)) //   { brand: 'Samsung', color: 'black' } without showOff
                                                   //   Hey, i have a new black Samsung phone  with showOff
        .catch(error => console.log(error.message));
};

askMom();