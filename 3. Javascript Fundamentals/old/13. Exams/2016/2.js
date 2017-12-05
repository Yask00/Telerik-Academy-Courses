// НЕ ПИШЕТЕ НИЩО ТУК

function solve(args) {
	
	var rowsCols = args[0].split(' ').map(Number),
    rows = rowsCols[0], // 5
    cols = rowsCols[1], // 5
    row, col,

    directions = {
		u: {row: -1,col: 0
		},
		r: {row: 0, col: +1
		},
		d: {row: +1, col: 0
		},
		l: {row: 0, col: -1
		},
	};

    var startPosition = args[1].split(';');
    var startPositionWboup = startPosition[0];  //1 1
    var startPositionNbslbub = startPosition[1]; // 0 1
    var startPositionLsjtujzbo = startPosition[2]; // 2 3

    var moves = args.slice(2);

    for (var i = 0; i < moves.length; i+=1) {
       var move = (moves[i]);
       
       if (move === 'mv Lsjtujzbo d') {
           movedPositin = 
       }

    }

    

    //var Wboup = startPositionWboup[row][col];
	//row += directions[dir].row;
	//col += directions[dir].col;
}



solve(['5 4',
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
    'mv Wboup d']);



