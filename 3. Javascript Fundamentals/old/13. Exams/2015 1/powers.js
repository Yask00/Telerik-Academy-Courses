function solve (args) {
   
    var line = args[0].split(' ');
    var n = +line[0];
    var k = +line[1];
    
    
    var array = args[1].split(' ').map(Number);
    
    //start of function----------------------------------------
    function transform (num, x, y) {
        if (num === 0) {
            return Math.abs(x - y);
        }
        else if(num === 1){
            return (x + y);
        }
        else if(num % 2 === 0){
            return Math.max (x, y);
        }
        else {
            return Math.min (x, y);
        }
    }
    //End of function---------------------------------------------

    array[-1] = array[n - 1]; // -1 element is last element
    array[n] = array[0]; // after last is first element

    for(var i = 0; i < k; i +=1){  // transformation times 1 to k(3)
            var transformedArray = [];

                for(var j = 0; j < n; j+=1){
                    transformedArray[j] = transform(array[j], array[j - 1], array[j + 1]);
                }
        array = transformedArray.slice(); // sets new array;
        array[-1] = array [n -1];
        array[n] = array[0];
    }
    //out of the loop
    array[-1] = 0; 
    array[n] = 0;

    var sum = array.reduce(function(a, b) { return a + b; }, 0); // function for array elements sum
    console.log(sum);
}


solve (['5 1',
'9 0 2 4 1']);

solve (['10 3',
'1 9 1 9 1 9 1 9 1 9']);