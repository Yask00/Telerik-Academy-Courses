function solve(args) {
    var rowsAndCols = args[0].split(' ').map(Number),
        rows = rowsAndCols[0], //5
        cols = rowsAndCols[1]; //7

    var rawField = args.slice(1);
    
    var field = []; //9 5 3 11 9 5 3........
    for (var i = 0; i < rows; i += 1) {
        field[i] = rawField[i].split(' ').map(Number);
    }

    //var startValue = field[(rows / 2) | 0][(cols / 2) | 0]; // 2 , 3 == 7
    var currentRow = (rows / 2) | 0, //2
        currentCol = (cols / 2) | 0; //3

    while (true) {
        var currentValue = field[currentRow][currentCol];  //7
        var decimalRep = createBinaryString(currentValue); //....0111
        field[currentRow][currentCol] = 0;

        //console.log(currentValue);

        //if not on first an last ROW an not on first and last COL we MOVE
        if (decimalRep[decimalRep.length - 1] === '1' && currentRow - 1 >= 0 && field[currentRow - 1][currentCol] !== 0) {
            currentRow -= 1;
        }
        else if (decimalRep[decimalRep.length - 2] === '1' && currentCol + 1 < cols && field[currentRow][currentCol + 1] !== 0) { //5 yes 6 no
            currentCol += 1;
        }
        else if (decimalRep[decimalRep.length - 3] === '1' && currentRow + 1 < rows && field[currentRow + 1][currentCol] !== 0) {
            currentRow += 1;
        }
        else if (decimalRep[decimalRep.length - 4] === '1' && currentCol - 1 >= 0 && field[currentRow][currentCol - 1] !== 0) {
            currentCol -= 1;
        }
        else {
            //if on first and last ROW and on first and last COL we go out
            if (decimalRep[decimalRep.length - 1] === '1' && currentRow === 0) {
                return `No rakiya, only JavaScript ${currentRow} ${currentCol}`;
            }
            else if (decimalRep[decimalRep.length - 2] === '1' && currentCol === cols - 1) { //5 yes 6 no
                return `No rakiya, only JavaScript ${currentRow} ${currentCol}`;
            }
            else if (decimalRep[decimalRep.length - 3] === '1' && currentRow === rows - 1) {
                return `No rakiya, only JavaScript ${currentRow} ${currentCol}`;
            }
            else if (decimalRep[decimalRep.length - 4] === '1' && currentCol === 0) {
                return `No rakiya, only JavaScript ${currentRow} ${currentCol}`;
            }
            else {
                return `No JavaScript, only rakiya ${currentRow} ${currentCol}`;
            }
        }
    }


    function createBinaryString(nMask) {
        // nMask must be between -2147483648 and 2147483647
        for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
            nFlag++ , sMask += String(nShifted >>> 31), nShifted <<= 1);
        return sMask;
    }
}

console.log(
    solve([
        '5 7',
        '9 5 3 11 9 5 3',
        '10 11 10 12 4 3 10',
        '10 10 12 7 13 6 10',
        '12 4 3 9 5 5 2',      //escape
        '13 5 4 6 13 5 6'])); //No rakiya, only JavaScript 0 1

// console.log(
//     solve(['7 5',
//         '9 3 11 9 3',
//         '10 12 4 6 10',
//         '12 3 13 1 6',
//         '9 6 11 12 3',
//         '10 9 6 13 6',
//         '10 12 5 5 3',  //trapped
//         '12 5 5 5 6'])); //No JavaScript, only rakiya 1 2
