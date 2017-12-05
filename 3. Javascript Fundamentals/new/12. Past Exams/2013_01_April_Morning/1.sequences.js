function solve(args) {

	var inputNumbers = args.slice(1).map(Number);
    var counter = 1; // count of up subsequences

	for (var i = 1; i < inputNumbers.length; i += 1){
		if (inputNumbers[i - 1] > inputNumbers[i]) {
			counter += 1;
		}
	}
	console.log(counter);
}

solve(['7', '1', '2', '-3', '4', '4', '0', '1']);  //3
solve(['6', '1', '3', '-5', '8', '7', '-6']);  //4
solve(['9', '1', '8', '8', '7', '6', '5', '7', '7', '6']);  // 5