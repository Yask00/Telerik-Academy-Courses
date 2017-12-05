function solve (args) {
    var size = args[0].split(' ').map(Number),
        rows = size[0], //3
        cols = size[1]; //4

    var startPosition = args[1].split(' ').map(Number),
        row = startPosition[0], //1
        col = startPosition[1]; //3

    var lab = args.slice(2), //['lrrd', 
                             // 'dlll', 
                             // 'rddd']
        visited = {},
        sum = 0,
        count = 0;
        

    var directions = {
        u:{
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
		}
    };    

    while (true) {
        //check if ouside labyrinth
        if (!(inRange(row, rows)) || !(inRange(col,cols))) {
            return 'out ' + sum; 
        }
        var cellValue = getValueAt(row, col, cols); // like from 1, 3 at start cellValue = 8
        //check if visited
        if (visited[cellValue]) { //if true
            return 'lost ' + count;
        }

        sum += cellValue;
        count++;
        visited[cellValue] = true;

        var dir = lab[row][col]; // --> u  --> d  --> l --> r like from 1, 3 is left
        row += directions[dir].row; //like directions[l].row(0)
        col += directions[dir].col; //like directions[l].col(-1) // like from 1, 3 to 1, 2
    }
    

        // values for cells
        function getValueAt (row, col, cols) {
            return row * cols + col + 1;
        }

        //check for matrix borders
        function inRange (value, border) {
		    return 0 <= value && value < border;
	    } 

}




console.log(solve([
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"]
)); //out 45

console.log(solve([
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"]
)); //lost 21


console.log(solve([
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"]
));  //out 442