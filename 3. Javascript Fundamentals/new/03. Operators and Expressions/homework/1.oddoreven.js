function solve (args) {
    var inputNumber = +args[0];
    if (inputNumber % 2 == 0) {
        console.log('even' + ' ' + inputNumber);
    } 
    else {
        console.log('odd' + ' ' + inputNumber);
    }
}

solve(['-1']);
solve(['2']);
solve(['0']);