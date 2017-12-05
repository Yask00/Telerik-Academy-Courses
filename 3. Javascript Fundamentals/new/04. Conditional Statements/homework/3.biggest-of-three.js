function biggestOfThree (args) {
    let firstNUmber = parseFloat(args[0]),
        secondNUmber = parseFloat(args[1]),
        thirdNUmber = parseFloat(args[2]);

        if (firstNUmber > secondNUmber && firstNUmber > thirdNUmber) {
            console.log(firstNUmber);
        }
        else if(secondNUmber > firstNUmber && secondNUmber > thirdNUmber){
            console.log(secondNUmber);
        }
        else{
            console.log(thirdNUmber);
        }
}

biggestOfThree(['-0.1', '-0.5', '-1.1']);