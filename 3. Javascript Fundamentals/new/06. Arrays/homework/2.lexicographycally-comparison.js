function compare (args) {
    let firstWord = args[0],
        secondWord = args[1],
        compare = firstWord.localeCompare(secondWord);

        if (compare == 1) {
            console.log('>');
        } 
        else if(compare == -1) {
            console.log('<');
        }
        else if(compare == 0)
        {
            console.log('=');
        }
}

compare(['halo', 'hello']);