function solve (args) {
	var s = +args[0],
	carsWheels = 4,
	truckWheels = 10,
	trikesWheels = 3,
	count = 0; //combinations

	//10 wheels
	for (var i = 0; i <= (s / truckWheels); i+=1) {
		//4 wheels
		for ( var j = 0; j <= (s / carsWheels); j+=1) {
			//3 wheels
			for ( var k = 0; k <= (s / trikesWheels); k+=1) {
				
				var all = (i * truckWheels) + (j * carsWheels) + (k * trikesWheels);

				if (all === s) {
					count += 1; //add combinations
				}
			}
		}
	}
	console.log(count);
}

solve(['7']);  //1
solve(['10']); //2
solve(['40']); //11
