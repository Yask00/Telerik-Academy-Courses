// НЕ ПИШЕТЕ НИЩО ТУК

function solve(args) {
	
	var numbers = args.slice(1).map(Number);
	
	var bestSum = numbers[0];

	

	for (var i = 0; i < numbers.length; i+=1) {
		
		var currentSum = 0;

		for (var j = i; j < numbers.length; j+=1) {
			currentSum += numbers[j];

			if (currentSum > bestSum) {
				bestSum = currentSum;
			}
		}
	}
	console.log(bestSum); // 0
    //return bestSum;
}



solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']);  //16
solve(['8', '1', '3', '-5', '8', '7', '-6']);  //15
solve(['9', '-9', '-8', '-8', '-7', '-6', '-5', '-1', '-7', '-6']);  // -1


