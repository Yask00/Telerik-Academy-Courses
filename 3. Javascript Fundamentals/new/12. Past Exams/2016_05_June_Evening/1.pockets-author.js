function solve(args) {
    const numbers = args[0].split(' ').map(Number);

    let peakIndexes = [];

    for (let i = 1; i < numbers.length - 1; i +=1) {
        //check for peaks
        if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
            peakIndexes.push(i); // like 3, 5, 7
        }
    }

    let pocketsSum = 0;

    for (let i = 1; i < peakIndexes.length/*like 3*/; i+=1) { // from 1 because left to peak 0 in no pocket
        if (peakIndexes[i] - peakIndexes[i - 1] === 2) { // like only one element between two peaks 5 - 3
            pocketsSum += numbers[peakIndexes[i] - 1];
        }
    }

    console.log(pocketsSum);
    
}


solve(["53 20 1 30 2 40 3 10 1"]);     //5 sum of pockets 2 + 3
solve(["53 20 1 30 30 2 40 3 10 1"]);  //3 sum of only last 3
solve(["53 20 1 30 2 40 3 3 10 1"]);   //2 sum of only 2