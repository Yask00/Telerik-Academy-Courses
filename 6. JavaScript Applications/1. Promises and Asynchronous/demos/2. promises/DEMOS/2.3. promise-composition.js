(function() {
    var promise1, promise2;
    promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('one');
        }, 3000);
    });

    promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(promise1);
        }, 2000);
    });

    promise2.then(function (data) { //function (data) like resolve('one')
        console.log(data); // 'one'
    });
}());