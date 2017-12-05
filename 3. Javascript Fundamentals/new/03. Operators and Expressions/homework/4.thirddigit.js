
function solve (args) {
    var inputNumber = +args[0];
    var thirdDigit = (inputNumber / 100) % 10; // 8.77 % 10
    var searchDigit = 7;

    console.log(thirdDigit | 0);

    if ((thirdDigit | 0) == searchDigit) {
        console.log('true');
    } 
    else {
        console.log('false' + ' ' + (thirdDigit | 0));
    }
}

solve([877]);