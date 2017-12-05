function solve (args) {
    var rowsAndCols = args[0].split(' '),
        rows = rowsAndCols[0],
        cols = rowsAndCols[1];

    var playerCoords = args[1].split(/[; ]/g).map(Number); //1, 1, 0, 1, 2, 3

    let trollW = {
        row: playerCoords[0], //1
        col: playerCoords[1], //1
        trapped: false
    };
    let trollN = {
        row: playerCoords[2], //0
        col: playerCoords[3], //1
        trapped: false
    };
    let princess = {
        row: playerCoords[4], //2
        col: playerCoords[5], //3
        trapped: false
    };

    let traps = []; // 2D matrix of false trapped values
    for(let i = 0; i < rows; i += 1){
        let row = new Array(cols);
        row.fill(false);
        traps.push(row);
    }

    args.shift(); 
    args.shift(); //clear first two input lines

    args.forEach(function(command){
        if (command === 'lay trap') {
            traps[princess.row][princess.col] = true;
        }
        else{
            let spl = command.split(' ');
            let unitToMove;
            //---------------------------------------unitToMove is one of 3 objects
            if (spl[1][0] === 'L') {
                unitToMove = princess;
            }
            else if(spl[1][0] === 'W'){
                unitToMove = trollW;
            }
            else if(spl[1][0] === 'N'){
                unitToMove = trollN;
            }
            else{
                //should not happen
            }

            if (unitToMove.trapped){
                return;
            }

            //-------------------------------------- movement
            if (spl[2] === 'u' && unitToMove.row > 0) {
                unitToMove.row -= 1;
            }
            else if (spl[2] === 'd' && unitToMove.row < rows - 1) {
                unitToMove.row += 1;
            }
            else if (spl[2] === 'l' && unitToMove.col > 0) {
                unitToMove.col -= 1;
            }
            else if (spl[2] === 'r' && unitToMove.col < cols - 1) {
                unitToMove.col += 1;
            }

            //check for stepping on traps------------------------
            if(trollW.row === trollN.row && trollW.col === trollN.col){
                trollW.trapped = false;
                trollN.trapped = false;
                traps[trollW.row][trollW.col] = false;
            }

            else if (spl[1][0] !== 'L' && traps[unitToMove.row][unitToMove.col]) {
                unitToMove.trapped = true;
            }

            
            

            //--------------------------------------check for condition to end game
            if (princess.row === rows - 1 && princess.col === cols - 1) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else if(trollW.trapped && trollN.trapped){
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);    
            }
            else {
               if(Math.abs(princess.row - trollW.row < 2 && Math.abs(princess.col - trollW.col < 2))) {
                   console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
               }
               else if(Math.abs(princess.row - trollN.row < 2 && Math.abs(princess.col - trollN.col < 2))){
                   console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
               }
            }
        }
    }); 
}


solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]); //The trolls caught Lsjtujzbo at 4 3