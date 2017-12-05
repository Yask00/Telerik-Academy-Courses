function solve(args) {
	
	var rowsColsAndJumps = parseNumbers(args[0]);

	var startPosition = parseNumbers(args[1]);

	var rows = rowsColsAndJumps[0];
	var cols = rowsColsAndJumps[1];
	var allJumps = rowsColsAndJumps[2];

	var currentRow = startPosition[0];
	var currentCol = startPosition[1];

		return getAnswer();

	function getAnswer () {
		var field = initField();
	var jumps = readjumps();

	var jumpsIndex = 0;
	var escaped = false;
	var sumOfNumbers = 0;
	var totalJumps = 0;

	while(true){
			if (currentRow < 0 || currentRow >= rows
			|| currentCol < 0 || currentCol >= cols) {
			escaped = true;
			break;	
			}

			if (field[currentRow][currentCol] === 'X') {
				escaped = false;
				break;
			}

			sumOfNumbers += field[currentRow][currentCol];
			totalJumps++;

			var currentJump = jumps[jumpsIndex++];

			if (jumpsIndex >= jumps.length) {
				jumpsIndex = 0;
			}

			field[currentRow][currentCol] = 'X';

			currentRow += currentJump.row;
			currentCol += currentJump.col;
	}
	return escaped ? 'escaped ' + sumOfNumbers : 'caught ' + totalJumps;
	}
	
	function readjumps () {
		var jumps = [];

		for (var i = 2; i < 2 + allJumps; i++) {

			var parsedJump = parseNumbers(args[i]);

			var currentJump = {
				row: parsedJump[0],
				col: parsedJump[1]
			};
				jumps.push(currentJump);
				//jumps[5].row;
		}

		return jumps;

		
	}
	
	function initField() {
		var field = [];
		var counter = 1;
			for (var i = 0; i < rows; i++) {
			field[i] = [];
				for (var j = 0; j < cols; j++) {
				field[i][j] = counter++;
			}
		}
		return field;
	}

	function parseNumbers (args) {
		return args.split(' ').map(Number);
	}


}





var input = 
['6 7 3', '0 0', '2 2', '-2 2', '3 -1'];

console.log(solve(input));

