function solve (args) {
    var rowsColsJumps = parseNumbers(args[0]), // 6, 7, 3
        rows = rowsColsJumps[0],               // 6
        cols = rowsColsJumps[1],               // 7
        allJumps = rowsColsJumps[2];
    var startPosition = parseNumbers(args[1]), // 0, 0  
        currentRow = startPosition[0],         //0
        currentCol = startPosition[1];         //0

    return getAnswer();
    
    //start of main function-----------------
    function getAnswer () {
        var field = initField(); //use of other function
        //  [ [1, 2, 3, 4, 5, 6, 7],
        //    [8, 9, 10, 11, 12, 13, 14], ............]
        var jumps = readJumps(); //use of other function
        // [    {row:2, col: 2}, {row:-2, col: 2}, {row:3, col: -1}     ]
        var jumpsIndex = 0;
        var escaped = false;
        var sumOfNumbers = 0;
        var totalJumps = 0;

        while (true) {
            if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
                escaped = true; //going out of matrix
	            break;
            }
            if (field[currentRow][currentCol] === 'X') {
                escaped = false; //step on visited cell
				break;
            }

            sumOfNumbers += field[currentRow][currentCol]; // starts from 0 + [0][0] = 1
            field[currentRow][currentCol] = 'X';

			totalJumps++; //starts from 0 + 1

            var currentJump = jumps[jumpsIndex++];
            if (jumpsIndex >= jumps.length) {
				jumpsIndex = 0;
			}

            currentRow += currentJump.row;
			currentCol += currentJump.col;
        }

        return escaped ? 'escaped ' + sumOfNumbers : 'caught ' + totalJumps;   
    }
    //end of main function-------------------

    //fill the matrix   
    function initField () {
        var field = [],
            counter = 1;
            for (var i = 0; i < rows; i+=1) {
                field[i] = []; //every row
                for (var j = 0; j < cols; j+=1) {
                   field[i][j] = counter++;  
                }
            }
            return field;
    }

    //ease to parse input data
    function parseNumbers (args) {
        return args.split(' ').map(Number);
    }

    //red jumps from input
    function readJumps () {
        var jumps = [];
        for (var i = 2; i < 2 + allJumps; i+=1) { // like i = 2; i < 2 + 3 // so i = 2, 3, 4
            var parsedJump = parseNumbers(args[i]); // like 2, 2
            var currentJump = {
                row: parsedJump[0], //2
                col: parsedJump[1]  //2
            };
            jumps.push(currentJump);
        }
        return jumps; // [{ row: 2, col: 2 }, { row: -2, col: 2 }, { row: 3, col: -1 }]
    }


}




var input = ['6 7 3', '0 0', '2 2', '-2 2', '3 -1'];
console.log(solve(input));


