function increasingSequence (args) {
    var n = +args[0],
    i,
    maxCounter = 0,
    currentCounter = 1;

    for ( i = 1; i < n - 1; i += 1) {
        while (+args[i] < +args[i + 1]) {
            currentCounter += 1;
            i += 1; // jump i in for loop if sequence
        }
        if (currentCounter > maxCounter) {
            maxCounter = currentCounter;
        }
         currentCounter = 1;
    }
    console.log(maxCounter);
}



increasingSequence(['8', '7', '3', '2', '3', '4', '5', '2', '4']);