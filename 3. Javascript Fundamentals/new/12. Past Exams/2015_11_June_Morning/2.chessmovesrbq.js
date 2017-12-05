function solve (args) {
    var r = +args[0],       //3
        cols = +args[1];    //4
    var board = args.slice(2, 2 + r); // [ '--R-', 'B--B', 'Q--Q' ]
    var moves = args.slice(3 + r); // [ 'd1 b3', ... , d1 d3 ]
    
    function parseMove (move) {
        let cells = move.split(' ');

        return{
            from: {
                r: r - Number(cells[0][1]), //second r is rows
                c: cells[0].charCodeAt(0) - 97
            },
            to: {
                r: r - Number(cells[1][1]),
                c: cells[1].charCodeAt(0) - 97
            }   // Like from d1 b3 to.....from moves to....
        };      // { from {r: 2, c:3}, to: {r: 0, c:1} }
    }      

    function canMoveRook (from, to) {
        if ((from.r !== to.r) && (from.c !== to.c)) { // row or col is not the same
            return false;                             //at least one has to the same
        }

        if ((from.r === to.r) && (from.c === to.c)) { // stay on same position
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        if (from.r === to.r) {
            deltaR = 0;
        }
        else {
            deltaC = 0;
        }

        while((from.r !== to.r) || (from.c !== to.c)){
            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;
    }

   function canMoveBishop (from, to) {
        if (Math.abs(from.r - to.r) !== Math.abs(from.c - to.c)) {
            return false;
        }
        if ((from.r === to.r) && (from.c === to.c)) {
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        while((from.r !== to.r) && (from.c !== to.c)){ //???????????
            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;
   }

   function canMoveQueen (from, to) { // can move as both Bishop and Rook
       return canMoveBishop(from, to) || canMoveRook (from, to);
   }

   for(let m of moves){
       let move = parseMove(m); // { from {r: 2, c:3}, to: {r: 0, c:1} }

    let piece = board[move.from.r][move.from.c]; //Q.....
    
    if (piece === "R") {
        let canMove = canMoveRook(move.from, move.to);
        console.log(canMove ? 'yes' : 'no');
    }
    else if(piece === "B"){
        let canMove = canMoveBishop(move.from, move.to);
        console.log(canMove ? 'yes' : 'no');
    }
    else if(piece === "Q"){
        let canMove = canMoveQueen(move.from, move.to);
        console.log(canMove ? 'yes' : 'no');
    }
    else{
        console.log('no');
    }
    
   }


}







solve([
	'3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',  //yes 
    'a1 a3',  //no
    'c3 b2',  //no
    'a1 c1',  //yes
    'a1 b2',  //yes
    'a1 c3',  //no
    'a2 b3',  //yes
    'd2 c1',  //yes
    'b1 b2',  //no
    'c3 b1',  //no
    'a2 a3',  //no
    'd1 d3',  //no
]); 

//solve([
//	'5',
//    '5',
//    'Q---Q',
//    '-----',
//    '-B---',
//    '--R--',
//    'Q---Q',
//    '10',
//    'a1 a1',  //no 
//    'a1 d4',  //yes
//    'e1 b4',  //yes
//    'a5 d2',  //yes
//    'e5 b2',  //yes
//    'b3 d5',  //yes
//    'b3 a2',  //yes
//    'b3 d1',  //no
//    'b3 a4',  //yes
//    'c2 c5',  //yes
//    
//]); 