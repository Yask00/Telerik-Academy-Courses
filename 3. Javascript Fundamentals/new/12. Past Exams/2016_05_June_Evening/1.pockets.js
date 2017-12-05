function solve(args) {

	var numbers = args[0].split(' ').map(Number),
        pocketsCount = 0;

    for (var j = 1; j < numbers.length - 1; j += 1){ //without 1st and last
        
        if (isPocket(j, numbers)) { 
            pocketsCount += numbers[j];   
        }
    }

    console.log(pocketsCount);
    //console.log(numbers[-1]); //undefined used with isPocket()
    

    function isPocket (index, arr) {
        return  arr[index - 1] > arr[index] &&
                arr[index + 1] > arr[index] &&
                arr[index - 1] > arr[index - 2] &&
                arr[index + 1] > arr[index + 2];
        //undefined > -22 === false        
    }
}


solve(["53 20 1 30 2 40 3 10 1"]);     //5 sum of pockets 2 + 3
solve(["53 20 1 30 30 2 40 3 10 1"]);  //3 sum of only last 3
solve(["53 20 1 30 2 40 3 3 10 1"]);   //2 sum of only 2