function solve (args) {
   
    var line = args[0].split(' '),
        n = +line[0],
        k = +line[1],
        array = args[1].split(' ').map(Number),
        sum = 0;
    
    //start of transfor Number function----------------------------------------
    function transform (num, x, y) {
        if (num === 0) {
            return Math.abs(x - y); //not num = x + y, but return x + y
        }
        else if(num === 1){
            return (x + y);         //not num = x + y, but return x + y
        }
        else if(num % 2 === 0){
            return Math.max (x, y); //not num = x + y, but return x + y
        }
        else {
            return Math.min (x, y); //not num = x + y, but return x + y
        }
    }
    //End of function------------------------------------------

    array[-1] = array[n - 1]; // -1 element is last element, not undefined
    array[n] = array[0]; // after last is first element, not undefined

    for(var i = 0; i < k; i +=1){  // transformation times 1 to k
            var transformedArray = [];

            for(var j = 0; j < n; j+=1){ //does not get the extra -1 and +1 elements
                transformedArray[j] = transform(array[j], array[j - 1], array[j + 1]);
            }

        array = transformedArray.slice(); // sets numbers from transformed to original array
        array[-1] = array [n -1]; //sets new -1 and +1 elements to new array
        array[n] = array[0];
    }
    //out of the loop
    array[-1] = 0;  //zero, not to be included in final sum
    array[n] = 0;   //zero, not to be included in final sum

    
    for(var numbers of array){
        sum += numbers;
    }
    //var sum = array.reduce(function(a, b) { return a + b; }, 0); // function for array elements sum
    console.log(sum);
}


solve (['5 1', '9 0 2 4 1']);  // 0 7 4 2 13
//26

solve (['10 3', '1 9 1 9 1 9 1 9 1 9']); //72 1 72 1 72 1 72 1 72 1
//365

solve (['10 10', '0 1 2 3 4 5 6 7 8 9']);
//42