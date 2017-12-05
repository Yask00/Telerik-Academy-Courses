function solve (args) {
    let text = args[0],
        replaced = '&nbsp;';

         text = replaceALL (text, ' ', '&nbsp;');
        console.log(text);
        
        function replaceALL (text, toReplace, replacement) {
            var regex = new RegExp(toReplace, 'gi');
            return text.replace(regex, replacement);
        }

}

solve([ 'This text contains 4 spaces!!' ]);