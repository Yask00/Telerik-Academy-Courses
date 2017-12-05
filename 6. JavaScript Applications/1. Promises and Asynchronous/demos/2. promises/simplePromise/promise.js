var p1 = new Promise(function(resolve, reject) {
  resolve('Success!');
  // or
  reject ("Error!");
});

p1.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});
//------------------------------------------------------------

var myFirstPromise = new Promise((resolve, reject) => {
    //setTimeout(function  () {
        resolve('Success');
    //}, 3000);
});


myFirstPromise.then(/*no function*/(successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log('YAY! ' + successMessage);
});

//------------------------------------------------------------

var promise = new Promise(function(resolve, reject) {
    var x = 4;    
    if (x > 5) {
        resolve('Stuff worked!'); // or pass some data
    } else {
        reject('It broke');
    }

    return promise; // give this to someone
});

promise.then(function (value) {
  console.log(value);
},           function (reason) {
  console.log(reason);
});