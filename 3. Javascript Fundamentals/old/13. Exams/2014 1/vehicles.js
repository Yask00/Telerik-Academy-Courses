function solve(args) {
	var s = +args[0],
	c1 = 4,
	c2 = 10,
	c3 = 3,

	i,
	j,
	k,
	all,
	count = 0; //combinations
	//4
	for ( i = 0; i <= (s / c1) + 1; i+=1) {
		//10
		for ( j = 0; j <= (s / c2) + 1; j+=1) {
			//3
			for ( k = 0; k < (s / c3) + 1; k+=1) {
				
				all = (i * c1) + (j * c2) + (k * c3);

				if (all === s) {
					count += 1; //add combinations
				}
			}
		}
	}
	console.log(count);
}



solve(['7']);
solve(['10']);
solve(['40']);


