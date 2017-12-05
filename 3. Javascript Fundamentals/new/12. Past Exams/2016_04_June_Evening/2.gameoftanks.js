function solve (args) {
    const EMPTY_FIELD = -1;
    const DEBRI = '@';
    
    const rowsAndCols = args[0].split(' ').map(Number),   
        rows = rowsAndCols[0],
        cols = rowsAndCols[1];

    let field = new Array(rows); 
    field.fill(0); // because at start all are undefined and does not work

    //fill the board with empty cells
    for(let i in field){
        field[i] = new Array(cols);
        field[i].fill(EMPTY_FIELD);
    }
    
    //fill the board with tanks
    let tankPositions = [
        {row: 0, col: 0}, //tank 0
        {row: 0, col: 1}, //tank 1
        {row: 0, col: 2}, //tank 2
        {row: 0, col: 3}, //tank 3
        {row: rows -1, col: cols - 1}, //tank 4
        {row: rows -1, col: cols - 2}, //tank 5
        {row: rows -1, col: cols - 3}, //tank 6
        {row: rows -1, col: cols - 4}, //tank 7
    ];
    
    //counter for player tanks
    let playerTanks = [4, 4]; //two players with 4

    //fill the board with tanks
    for(let i in tankPositions){ //from 0 to 7
        field[tankPositions[i].row][tankPositions[i].col] = i; //like tankPositions[4] = { row: 4, col: 4}
    }

    //fill the board with debris
   args[1].split(';').forEach(function(coord){
       const arr = coord.split(' ').map(Number);
       const x = arr[0],
             y = arr[1];
       field[x][y] = DEBRI;
   });
   
    

   function moveTank (id, n, dir) {
       let deltaRow = 0, deltaCol = 0;
       
       if (dir === 'u') {
           deltaRow = -1; 
       }
       else if(dir === 'd'){
            deltaRow = +1; 
       }
       else if(dir === 'l'){
            deltaCol = -1; 
       }
       else if(dir === 'r'){
            deltaCol = +1; 
       }
       else{
           //wtf condition
       }
       
       let tankRow = tankPositions[id].row;
       let tankCol = tankPositions[id].col;
       
       field[tankRow][tankCol] = EMPTY_FIELD; // remove tank from cell before moving it

       while(n > 0){
           const newPosRow = tankRow + deltaRow;
           const newPosCol = tankCol + deltaCol;

           //check if outside boundary
           if (newPosRow < 0 || newPosRow > rows - 1) {
               break;
           }
           if (newPosCol < 0 || newPosCol > cols - 1) {
               break;
           }
           //field is already positioned
           if (field[newPosRow][newPosCol] !== EMPTY_FIELD) {
               break;
           }

           //move tanks
           tankRow = newPosRow;
           tankCol = newPosCol;
           n -= 1;

       }
       //update tank object
       tankPositions[id].row = tankRow;
       tankPositions[id].col = tankCol;

       //update field
       field[tankRow][tankCol] = id;
   }

   function shootWithTank (id, dir) {
       let deltaRow = 0, deltaCol = 0;
       
       if (dir === 'u') {
           deltaRow = -1; 
       }
       else if(dir === 'd'){
            deltaRow = +1; 
       }
       else if(dir === 'l'){
            deltaCol = -1; 
       }
       else if(dir === 'r'){
            deltaCol = +1; 
       }
       else{

       }

       let shootRow = tankPositions[id].row + deltaRow; //not to shoot ourselfs
       let shootCol = tankPositions[id].col + deltaCol;

       while (0 <= shootRow && shootRow < rows && 0 <= shootCol && shootCol < cols) { // if outside matrix
           if (field[shootRow][shootCol] === EMPTY_FIELD) {
               shootRow += deltaRow;
               shootCol += deltaCol;
           }
           else if (field[shootRow][shootCol] === DEBRI){
               field[shootRow][shootCol] = EMPTY_FIELD;
               break;
           }
           else{
               const deadTankId = field[shootRow][shootCol];
               field[shootRow][shootCol] = EMPTY_FIELD;

               console.log(`Tank ${deadTankId} is gg`);

               const playerId = deadTankId < 4 ? 0 : 1;
               playerTanks[playerId] -= 1;

               if (playerTanks[playerId] === 0) {
                   const loserName = ['Koceto', 'Cuki'][playerId];
                   console.log(`${loserName} is gg`);
               }
               break;
           }
       }
   }

   //go through the commands
    const n = +args[2];
    for (let i = 3; i < n + 3; i+=1) {
        const commandSplit = args[i].split(' ');

        if (commandSplit[0] === 'mv') {
            moveTank(+commandSplit[1], +commandSplit[2], commandSplit[3]); //like moveTank(7, 2, r)
        }
        else if(commandSplit[0] === 'x'){
            shootWithTank(+commandSplit[1], commandSplit[2]);
        }
        else{

        }
    }
}



solve([
    '5 5',
    '2 0;2 1;2 2;2 3;2 4',
    '13',
    'mv 7 2 l',
    'x 7 u',
    'x 0 d',
    'x 6 u',
    'x 5 u',
    'x 2 d',
    'x 3 d',
    'mv 4 1 u',
    'mv 4 4 l',
    'mv 1 1 l',
    'x 4 u',
    'mv 4 2 r',
    'x 2 d'
]); 

//Tank 7 is gg
//Tank 6 is gg
//Tank 5 is gg
//Tank 0 is gg
//Tank 4 is gg
//Cuki is gg


  

 

  
    

