
function solve(args) {

	var size = args[0].split(' '),
	rows = parseInt(size[0]),  //3
	cols = parseInt(size[1]),  //4
	
	startPosition = args[1].split(' '),  //1, 3
	row = parseInt(startPosition[0]),   //1
	col = parseInt(startPosition[1]),   //3
	lab = args.slice(2),
	visited = {},
	sum, 
	count,
	directions = {
		u: {
				row: -1,
				col: 0
		},
		r: {
				row: 0,
				col: +1
		},
		d: {
				row: +1,
				col: 0
		},
		l: {
				row: 0,
				col: -1
		},
	};


	function getValueAt (row, col, cols) {  // value for cells
		return row * cols + col + 1;
	}

	function inRange (value, border) {
		return 0 <= value && value < border;
	}

	sum = 0;
	count = 0;

	while (true) {
		//check if outside the labyrinth
		if ( !(inRange(row, rows)) || !(inRange(col, cols) )) {
			return 'out ' + sum; 
		}
		var cellValue = getValueAt(row, col, cols); // was after mext if
		//check if visited
		if (visited[cellValue]) {
			return 'lost ' + count;
		}

		
		sum += cellValue;
		count ++;
		visited[cellValue] = true;

		var dir = lab[row][col];
		row += directions[dir].row;
		col += directions[dir].col;
	}

}

console.log(solve([
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"]
));

//console.log(solve([
// "5 8",
// "0 0",
// "rrrrrrrd",
// "rludulrd",
// "durlddud",
// "urrrldud",
// "ulllllll"]
//));


//solve([
// "5 8",
// "0 0",
// "rrrrrrrd",
// "rludulrd",
// "lurlddud",
// "urrrldud",
// "ulllllll"]
//);


