function multiplicationSign (args) {
        let firstNUmber = parseFloat(args[0]),
            secondNUmber = parseFloat(args[1]),
            thirdNUmber = parseFloat(args[2]),
            product = firstNUmber * secondNUmber * thirdNUmber;
       
       if(product < 0){
           console.log('-');
       }
       else if(product == 0){
            console.log('0');
       }
       else{
           console.log('+');
       }
}


multiplicationSign(['0', '-2.5', '4']);