function exchangeIfGreater (args) {
    let firstNUmber = parseFloat(args[0]),
        secondNUmber = parseFloat(args[1]);

        if (secondNUmber > firstNUmber) {
            console.log(`${firstNUmber} ${secondNUmber}`);
        }
        else{
            console.log(`${secondNUmber} ${firstNUmber}`);
        }
}

exchangeIfGreater(['3', '4']);