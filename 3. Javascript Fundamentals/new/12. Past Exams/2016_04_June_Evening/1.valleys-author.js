function solve(args) {
	var numbers = args[0].split(' ').map(Number);
	

    function isPeak (index) {  //returns true or false
        if (index === 0 || index === numbers.length - 1) { // first and last
            return true;
        }
        else if(numbers[index] > numbers[index - 1] && numbers[index] > numbers[index + 1]){
            return true;
        }
        return false;
    }

    let peaks = [];

    numbers.forEach(function(number, ind){
        if (isPeak(ind)) {
            peaks.push(ind); // like 0, 2, 4
        }
    });

    var bestSum = 0;
    
    for(let i = 1; i < peaks.length; i += 1){ 
        let startIndex = peaks[i - 1];//like 0
        let endIndex = peaks[i]; //like 2
        let currentSum = 0;

        for (let j = startIndex; j <= endIndex; j+=1) {
            currentSum += numbers[j];
            if (currentSum > bestSum) {
                bestSum = currentSum;
            }
        }
    }

    console.log(bestSum);
}

solve(["5 1 7 4 8"]);            //19
solve(["5 1 7 6 5 6 4 2 3 8"]);  //24