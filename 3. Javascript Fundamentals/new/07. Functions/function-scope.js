var a = 3;

function myFunction() {
    let a = 3;
    var b =  a * a;
    return b;
}

a = 4;

console.log(myFunction()); //9
console.log(a * a);        //16