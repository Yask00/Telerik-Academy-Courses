function solve (args) {
    var rows = +args[0],
        cols = +args[1];
    var board = args.slice(2, 2 + rows);
    var moves = args.slice(rows + 2 + 1)
                    .map(moveString => {
                        var parts = moveString.split(' '); //like d1 b3
                        return{
                            "fromRow": getRowIndex(parts[0][1]),    //1
                            "fromCol": getColumnIndex(parts[0][0]), //d to 3
                            "toRow": getRowIndex(parts[1][1]),      //3
                            "toCol": getColumnIndex(parts[1][0])    //b to 1
                        };
                    }); // like { fromRow: 2, fromCol: 3, toRow: 0, toCol: 1 } === d1 b3
                   

    moves.forEach(move => {

        let piece = board[move.fromRow][move.fromCol];

        if (isQueen(piece)) {
            if (isEmpty(board[move.toRow][move.toCol]) && checkQueen(move)) {
                console.log('yes');
            }
            else{
                console.log('no');
            }
        }
        else if(isKnight(piece)){
            if (isEmpty(board[move.toRow][move.toCol]) && checkKnight(move)) {
                console.log('yes');
            }
            else{
                console.log('no');
            }
        }
        else{
            console.log('no');
        }
        
    });

     function getRowIndex (rowName) {
         return rows - rowName; //turn the matrix row indexes from bottom
     }         

     function getColumnIndex (columnName) {
         let value = columnName.charCodeAt(0); //turn a to 0 ...
         return value - 'a'.charCodeAt(0);
     }   

     function isKnight (piece) {
         return piece === "K";
     }   
     
     function isQueen (piece) {
         return piece === "Q";
     }

     function isEmpty (piece) {
         return piece === '-';
     }

     function checkQueen (move) {
        let deltaRow = getDelta(move.fromRow, move.toRow);
          
        let deltaCol = getDelta(move.fromCol, move.toCol);

        let row = move.fromRow,
            col = move.fromCol;

        while (true) {
            row += deltaRow;
            col += deltaCol;

            if (!board[row] || !board[row][col]) {
                return false;
            }
            if (!isEmpty(board[row][col])) {
                return false;
            }
            if (move.toRow === row && move.toCol === col) {
                return true;
            }
        }   
       
    }

     function checkKnight (move) {
         const deltas = [   [-2, 1], [-1, 2], [1, 2], [2, 1],
                            [2, -1], [1, -2], [-1, -2], [-2, -1]];
        for(let delta of deltas){
            let row = move.fromRow + delta[0],
                col = move.fromCol + delta[1];
            if (row === move.toRow && col === move.toCol) {
                return true;
            }
        }
        return false;
     }

     function getDelta (from, to) {
         return (from > to) ? -1 : (from < to) ? +1 : 0;
     }
}



solve([
	'3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',  //yes 
    'a1 a3',  //no
    'c3 b2',  //no
    'a1 c1',  //yes
    'a1 b2',  //yes
    'a1 c3',  //no
    'a2 c1',  //yes
    'd2 c1',  //yes
    'b1 b2',  //no
    'c3 a1',  //no
    'a2 a3',  //no
    'd1 d3',  //no
]); 