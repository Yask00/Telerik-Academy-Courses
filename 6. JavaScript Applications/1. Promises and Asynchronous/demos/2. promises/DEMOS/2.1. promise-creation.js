(function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id: 5, description: 'some data' });
            reject('something happend');
        }, 2000);
    });

    const printMsg = function (obj) {
        const message = 'Hey, i have a new ' +
            obj.id + ' ' + obj.description + ' phone';
        return message; //return Promise.resolve(message);    
    };

    promise
        .then(printMsg)
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}());