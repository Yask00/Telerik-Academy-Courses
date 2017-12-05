function numbers (args) {
    let inputNUmber = +args[0],
    output = '';

    for (var i = 1; i <= inputNUmber; i+=1) {
        output += (i + ' ');
    }
    console.log(output);
}

numbers(['5']);