function solve(params) 
{ var s = params[0], 
	c1 = params[1], 
	c2 = params[2], 
	c3 = params[3]; 
	var answer = 0; 
	
	var i, j, k;
	

	for ( i = 0; i <= (s / c1) + 1; i+= 1) {
		for ( j = 0; j <= (s / c2) + 1; j+=1) {
			for ( k = 0; k <= (s / c3) + 1; k+=1) {
				
				var price = i * c1 + j * c2 + k * c3;
				if (price <= s) {
					answer = Math.max(answer, price);
				}
				
			}
			
		}
	}
	return answer;            //100
	//console.log(answer);    //80??????????????????
	

}

solve(['110', '13', '15', '17']);
solve(['20', '11', '200', '300']);
solve(['110', '19', '29', '39']);