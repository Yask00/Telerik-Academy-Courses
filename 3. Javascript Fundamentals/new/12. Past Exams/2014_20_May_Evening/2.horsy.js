function solve (args) {
    var rowsAndCols = getRowsAndCols(args[0]), //like [3, 5]
        rows = rowsAndCols[0], //3
        cols = rowsAndCols[1]; //5

    var row = rows - 1, //start position like 3 - 1 
        col = cols - 1; //start position like 5 - 1 ------> 2, 4

    var points = 0,
        moves = 0,
        used = [];

    var horseMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1] ]; //r then c

    while (true) {
        //check if in matrix boundaries
        if (row >= rows || col >= cols || row < 0 || col < 0) {
            return 'Go go Horsy! Collected ' + points + ' weeds';
        }
        //check if on steped
        if (used[row + ' ' + col + ' ']) {
            return 'Sadly the horse is doomed in ' + moves + ' jumps';
        }

        moves = moves + 1;
        points = points + getPoints(row, col);

        var move = horseMoves[getValue(args, row, col) - 1]; //like horseMoves[7] --> [-2, -1]
        used [row + ' ' + col + ' '] = true;

        row += move[0];
        col += move[1];

    }   

        function getRowsAndCols (str) {
           var parts = str.split(' ');
           return [parseInt(parts[0]), parseInt(parts[1])];
        }

        //get value at given cell by formula
        function getPoints (row, col) {
            return Math.pow(2, row) - col;
        }

        function getValue (params, row, col) {
            return params[row + 1][col];
        }
}




console.log(solve([
    '3 5',
    '54561',
    '43328',
    '52388',
])); //Go go Horsy! Collected 1 weeds


console.log(solve([
	'3 5',
    '54361',
    '43326',
    '52188',
])); //Sadly the horse is doomed in 7 jumps