var numbers = [1, 5, 10, 15];

var roots = numbers.map(function(x){
    return x * 2;
}); //2 10 20 30

var numbers2 = [1, 4, 9];
var roots2 = numbers2.map(Math.sqrt); //1 8 18

console.log(numbers);
console.log(roots);
console.log('---------');
console.log(numbers2);
console.log(roots2);
console.log('---------');

var kvArray = [
        {key:1, value:10},
        {key:2, value:20},
        {key:3, value:30}
];

var reformattedArray = kvArray.map(function(obj){
    var rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
});

console.log(kvArray);
console.log(reformattedArray);

console.log('---------');

var str = '12345';
var rts = Array.prototype.map.call(str, function(x){
    return x;
}).reverse().join('');

console.log(str);
console.log(rts);