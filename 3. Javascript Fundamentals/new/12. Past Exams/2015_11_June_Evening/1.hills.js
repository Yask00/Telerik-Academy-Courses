function solve (args) {
    var numbers = args[0].split(' ').map(Number);
    var peaks = [0];
    
    for (var i = 1; i < numbers.length - 1; i += 1) {
        if (isGreaterThanNeigbours(i, numbers)) {
            peaks.push(i); //adds index of peak element into array
        }
    }
    peaks.push(numbers.length - 1); //adds last element as peak
    
    var bestCount = -1;
    //2nd solve we got peaks at indexes 0, 2, 5 and 9
    
    for (var i = 1; i < peaks.length; i+=1) {
        bestCount = Math.max(bestCount, peaks[i] - peaks[i - 1]); //gives elements between two peaks, without valley
    }

    console.log(bestCount);

    function isGreaterThanNeigbours (index, arr) { //checks if its peak? true/false
        return arr[index - 1] < arr[index] && arr[index + 1] < arr[index];
    }
}

solve(['5 1 7 4 8']);               //2
solve(['5 1 7 6 3 6 4 2 3 8']);     //4
solve(['10 1 2 3 4 5 4 3 2 1 10']); //5