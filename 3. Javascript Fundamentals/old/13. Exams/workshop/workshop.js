//01. Greedy Dwarf----------------------------------------

//function solve (lines) {
//    var valley = lines[0].split(',').map(Number);
//
//    function isOutside (valley, index) {
//        return valley[index] === undefined;
//    }
//
//
//    function coinsForPattern (valley, pattern) {
//        var visited = [],
//        coins = 0,
//        index = 0, // where im at the moment
//        patternIndex = 0; //which pattern element is used
//
//        //  continue while not visited or inside value
//        while(!visited[index] && !isOutside(valley, index)){    //was i there already, 0 is visited from start
//              
//              coins += valley[index];
//              visited[index] = true; 
//
//              index += pattern[patternIndex]; 
//              
//              patternIndex = (patternIndex + 1) % pattern.length;
//        }
//        return coins;
//    } //End of second function
//    
//    var results = [];
//
//    for (var i = 2; i < lines.length; i+=1) {
//        //console.log(lines[i]); 
//        //1, 2, -3
//        //1, 3, -2
//        //1, -1
//
//        var pattern = lines[i].split(',').map(Number);  
//
//        results.push(coinsForPattern(valley, pattern)); 
//        //11
//        //21
//        //4 
//    }
//
//    var maxCoins = Math.max.apply(null, results);
//    return maxCoins;
//}
//
//var test1 =
//['1, 3, -6, 7, 4 ,1, 12',
//'3',
//'1, 2, -3',
//'1, 3, -2',
//'1, -1'
//];
//
//
//console.log(solve(test1));



//2. Magic Words----------------------------------------


function solve (lines) {

            function print (words) {
                var wordLengths = words.map(function (w){
                    return w.length;
                });


                var maxLength = Math.max.apply (null, wordLengths);
                var result = '';
                for (var c = 0; c < maxLength; c+=1) {
                    
                        for (var i = 0; i < words.length; i+= 1) {
                        
                        if ( words[i][c])  {
                            result += (words[i][c]); 
                        } 
                    }
                }
                console.log(result); //IMPORTANT FOR LOG
            }

            function reorder (words) {
                //insert - remove 

  
                for (var oldPos = 0; oldPos < words.length; oldPos+=1) {
                
                    
                var newPos = words[oldPos].length % (words.length + 1);

                words.splice(newPos, 0, words[oldPos]);

                if(newPos < oldPos){
                    words.splice(oldPos + 1, 1);
                }
                else{
                    words.splice(oldPos, 1);
                }
                }
                
            }



var words = lines.slice(1);
//print(words);  //to go after reorder
reorder(words);
print(words);



}


solve([
'3',
'hi',
'academy',
'exam'
]);



