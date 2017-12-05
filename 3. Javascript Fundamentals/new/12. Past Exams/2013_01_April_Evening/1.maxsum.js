function solve (args) {
	var inputNumbers = args.slice(1).map(Number), 
		bestSum = inputNumbers[0];
		
		for (var i = 0; i < inputNumbers.length; i += 1) {
			var currentSum = 0; // always starts from zero before second loop

			for (var j = i; j < inputNumbers.length; j += 1) {
				currentSum += inputNumbers[j];

				if (currentSum > bestSum) {
					bestSum = currentSum;
				}
			}
		}
		
		console.log(bestSum);
}


solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']); //16 from 4 4 -2 10
solve(['6', '1', '3', '-5', '8', '7', '-6']); //15 from 8 7
solve(['9', '-9', '-8', '-8', '-7', '-6', '-5', '-1', '-7', '-6']); //-1 from -1



