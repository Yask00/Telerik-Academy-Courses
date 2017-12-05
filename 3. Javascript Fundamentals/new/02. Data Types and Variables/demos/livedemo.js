var a = 0.1,
    b = 0.2;

var firstSum = a + b,
    sum = 0.3,
    diff = 0.0001;

var first = (a + b) == sum;
var equal = ((a + b == sum) < diff);

console.log(first);
console.log(equal);