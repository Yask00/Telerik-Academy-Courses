// НЕ ПИШЕТЕ НИЩО ТУК

function solve(args) {
	
	var input = args.slice(1).map(Number);

	var result = 1;

	for (var i = 1; i < input.length; i+= 1){
		if (input[i-1] > input[i]) {
			result += 1;
		}
	}
	
	console.log(result);

	
}



solve(['7', '1', '2', '-3', '4', '4', '0', '1']);  //3
solve(['6', '1', '3', '-5', '8', '7', '-6']);  //4
solve(['9', '1', '8', '8', '7', '6', '5', '7', '7', '6']);  // 5


