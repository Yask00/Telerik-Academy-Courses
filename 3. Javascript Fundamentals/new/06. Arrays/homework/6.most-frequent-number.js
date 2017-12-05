function mostFrequent (args) {
    let n = +args[0],
    arr = [],
    bestCount = 0;

    for (var i = 0; i < n; i+=1) {
        arr[i] = +args[i + 1];
    }
    
    for (i = 0; i < arr.length; i += 1) {
        for (j = i; j < arr.length; j += 1) {
            if (arr[i] === arr[j]) {
                bestCount += 1;
                if (count > bestCount) {
                    bestCount = count;
                    number = +arr[i];
                }
            } else {
                count = 1;
            }
        }
    }

}

mostFrequent(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);