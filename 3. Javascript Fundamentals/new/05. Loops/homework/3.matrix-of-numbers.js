function matrix (args) {
    let inputNUmber = +args[0],
        result = '';

    for (var i = 1; i <= inputNUmber; i+=1) {
        for (var j = i; j < inputNUmber + i; j+=1) {
               result += j + ' ';
        } 
        console.log(result);
		result = ''; //cleans result and loops first for again
    }
}
matrix(['4']);