function solve(args) {

	var numbers = args[0].split(' ').map(Number);
    var pockets = [];


    for (var j = 0; j < numbers.length; j += 1){
        
        if (isPocket(j, numbers)) {
            pockets.push(j);
        }
    }

    var pocketsCount = 0;

    for (var i = 0; i < pockets.length; i += 1) {
        pocketsCount += numbers[pockets[i]];
        
    }
    console.log(pocketsCount);

    function isPocket (index, arr) {
        return  arr[index - 1] > arr[index] &&
                arr[index + 1] > arr[index] &&
                arr[index - 1] > arr[index - 2] &&
                arr[index + 1] > arr[index + 2];
    }
}


//solve(["53 20 1 30 2 40 3 10 1"]);     //5
//solve(["53 20 1 30 30 2 40 3 10 1"]);  //3
solve(["53 20 1 30 2 40 3 3 10 1"]);   //2


//още в началото един цял replace на всички multiwhite-spaces с един:
//string = string.replace(/  +/g, ' ');
//Превръщане на стрингово число в number число: '21' * 1 = 21;