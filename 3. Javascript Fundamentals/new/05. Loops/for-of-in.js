let arr = ['5', 4, 3, 2, 1];

for (var x in arr) {
    console.log(x, arr[x]); //not x
}

console.log('----------');

for (var y of arr){
    console.log(y, arr[y]);
}

console.log('----------');

for (var x in arr) {
    console.log(x); //not x
}

console.log('----------');

for (var z of arr){
    console.log(z);
}