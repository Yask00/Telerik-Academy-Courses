function solve (args) {
    var n = +args[0],
        k = + args[1],
        numbers = args[2].split(' ').map(Number),
        resultArr = [],
        min = numbers[0],
        max = numbers[0],
        sum;
        
        for (var i = 0; i <= numbers.length - k; i += 1) {
            for (var j = i; j < i + k; j += 1) {
                if (numbers[j] < min){
                    min = numbers[j];
                }
                if(numbers[j] > max){
                    max = numbers[j];
                }
            }   
            sum = min + max;
           
            min = 99999999999;
            max = -99999999999;
            resultArr.push(sum);
        }

        // join the array with the comma's in between
        var result = resultArr.join(',');
        console.log(result);
}

solve(['4', '2', '1 3 1 8']); //4, 4, 9
solve(['5', '3', '7 7 8 9 10']); // 15,16,18
solve(['8', '4', '1 8 8 4 2 9 8 11']); //9,10,11,11,13