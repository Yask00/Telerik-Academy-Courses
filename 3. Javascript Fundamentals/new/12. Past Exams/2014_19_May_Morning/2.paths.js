function solve (args) {
    var rowsCols = args[0].split(' '),
        bounds = {
            rows: rowsCols[0], //3 
            cols: rowsCols[1]  //5
        }, //like { rows: '3', cols: '5' } //why not numbers??

        matrix = args.slice(1).map(function(line){
            return line.split(' ');
        }),
        //[   [ 'dr', 'dl', 'dr', 'ur', 'ul' ],
        //    [ 'dr', 'dr', 'ul', 'ur', 'ur' ],
        //    [ 'dl', 'dr', 'ur', 'dl', 'ur' ] ]
        row = 0, //starting row
        col = 0, //starting col
        sum = 0,
        dir,
        leftRight,
        upDown;

        var deltas ={
            u: -1,
            d: +1,
            l: -1,
            r: +1
        };

       while (1) {
           //check if inside matrix
           if (!matrix[row] || !matrix[row][col]) {
               return 'successed with ' + sum;
           }
           //if on steped cell
           if (matrix[row][col] === 'used') {
              return 'failed at (' + row +', ' + col +')';
           }

           sum += Math.pow(2, row) + col; //way to get value at cell like Math.pow(2, 0) + 0 === 1;

           dir = matrix[row][col]; // like dr
           matrix[row][col] = 'used';

           upDown = dir[0]; //like d
           leftRight = dir[1]; //like r

           //update row and col
           row += deltas[upDown]; //like +1 from d
           col += deltas[leftRight]; //like +1 from r
       }
}






console.log(solve([
'3 5',
'dr dl dr ur ul',
'dr dr ul ur ur',
'dl dr ur dl ur'
]));  //successed with 20

console.log(solve([
'3 5',
'dr dl dl ur ul',
'dr dr ul ul ur',
'dl dr ur dl ur'])); //failed at (1, 1)