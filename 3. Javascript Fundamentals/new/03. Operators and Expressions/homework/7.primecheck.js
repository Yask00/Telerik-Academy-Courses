function primeCheck (args) {
    var number = +args[0];

    if (number < 0 || number == 0 || number == 1 ) {
        console.log('false');
    }
    
    else{
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                console.log('false');
                return; //  not break;
            }
        }
        console.log('true');
    }
}   

primeCheck(['4']);