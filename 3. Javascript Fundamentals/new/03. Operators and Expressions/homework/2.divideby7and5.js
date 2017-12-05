function solve (args) {
    var inputNumber = +args[0];
    if (inputNumber % 7 == 0 && inputNumber % 5 == 0) {
        console.log('true' + ' ' + inputNumber);
    } 
    else {
        console.log('false' + ' ' + inputNumber);
    }
}

solve(['35']);
solve(['30']);
solve(['21']);
