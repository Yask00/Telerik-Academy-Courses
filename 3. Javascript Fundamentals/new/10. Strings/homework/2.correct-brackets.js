function solve (args) {
    let input = args[0];
    checkBrackets(input);

    function checkBrackets (word) {
        let leftsCount = 0,
            rightsCount = 0;

        for (var i = 0; i < word.length; i+=1) {
           if (word[i] == '(') {
               leftsCount += 1;
           }
           else if (word[i] == ')') {
               rightsCount += 1;
           }   
        }
        
        console.log(leftsCount === rightsCount ? 'Correct' : 'Incorrect');
    }
}

solve ([ '((a+b)/5-d)' ]);
solve ([ ')(a+b))' ]);
