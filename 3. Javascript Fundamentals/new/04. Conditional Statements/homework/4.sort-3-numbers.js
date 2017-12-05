function sortThreeNumbers (args) {
        let firstNUmber = parseFloat(args[0]),
            secondNUmber = parseFloat(args[1]),
            thirdNUmber = parseFloat(args[2]);

        if (firstNUmber > secondNUmber && firstNUmber > thirdNUmber) {
            if (secondNUmber > thirdNUmber) {
                console.log(`${firstNUmber} ${secondNUmber} ${thirdNUmber}`);
            }
            else{
                console.log(`${firstNUmber} ${thirdNUmber} ${secondNUmber}`);
            }
        }    
        else if(secondNUmber > firstNUmber && secondNUmber > thirdNUmber){
            if (firstNUmber > thirdNUmber) {
                console.log(`${secondNUmber} ${firstNUmber} ${thirdNUmber}`);
            }
            else{
                console.log(`${secondNUmber} ${thirdNUmber} ${firstNUmber}`);
            }
        }
        else{
            if (firstNUmber > secondNUmber) {
                console.log(`${thirdNUmber} ${firstNUmber} ${secondNUmber}`);
            }
            else{
                console.log(`${thirdNUmber} ${secondNUmber} ${firstNUmber}`);
            }
        }
}

sortThreeNumbers(['-1.1', '-0.5', '-0.1']);