//---------------------------------------------------------arithmetic
//    console.log('11.0 / 3 = ' + (11.0 / 3)); // 3.666666667
//		console.log('11 / 3.0 = ' + (11 / 3.0)); // 3.666666667
//		console.log('11 % 3 = ' + (11 % 3));   // 2
//		console.log('11 % -3 = ' + (11 % -3));  // 2
//		console.log('-11 % 3 = ' + (-11 % 3));  // -2'
//		console.log('1.5 / 0.0 = ' + (1.5 / 0.0));  // Infinity
//		console.log('-1.5 / 0.0 = ' + (-1.5 / 0.0)); // -Infinity
//		console.log('0.0 / 0.0 = ' + (0.0 / 0.0));  // NaN				'
//		console.log('true / 2 = ' + (true / 2));
//		console.log('"1" / 2 = ' + ('1' / 2));
//		console.log('"as" / 2 = ' + ('as' / 2));
//
//		let x = 0;
//		console.log('5 / x = ' + (5 / x));

    
//---------------------------------------------------------logical

    //let a = true;
		//let b = false;
		//console.log('a && b = ' + (a && b)); // false
		//console.log('a || b = ' + (a || b)); // true
		//console.log('a ^ b = ' + (a ^ b)); // 1	  !!!!!!
		//console.log('!b = ' + !b); // true
		//console.log('b || true = ' + (b || true)); // true
		//console.log('b && true = ' + (b && true)); // false
		//console.log('a || true = ' + (a || true)); // true
		//console.log('a && true = ' + (a && true)); // true
		//console.log('!a = ' + !a); // false
		//console.log('(5 > 7) ^ (a == b) = ' + ((5 > 7) ^ (a === b))); // 0	

//---------------------------------------------------------bitwise

//   console.log('-------------------------');
//		console.log('Bitwise operators with integers:');
//		let a = 3;                // 00000000 00000011
//		let b = 5;                // 00000000 00000101
//		console.log('a = ' + a + ', b = ' + b);
//		console.log('a | b  = ' + (a | b) + ' - > ' + (a | b).toString(2));   // 00000000 00000111
//		console.log('a & b  = ' + (a & b) + ' - > ' + (a & b).toString(2));   // 00000000 00000001
//		console.log('a ^ b  = ' + (a ^ b) + ' - > ' + (a ^ b).toString(2));   // 00000000 00000110
//		console.log('~a & b = ' + (~a & b) + ' - > ' + (~a & b).toString(2));   // 00000000 00000100
//		console.log('a << 1 = ' + (a << 1) + ' - > ' + (a << 1).toString(2));  // 00000000 00000110
//		console.log('a >> 1 = ' + (a >> 1) + ' - > ' + (a >> 1).toString(2));  // 00000000 00000001


//---------------------------------------------------------comparison

//    console.log('----------------------------------------------------');
//		console.log('Regular comparisons: ');
//		let a = 5;
//		let b = 4;
//		console.log('a = ' + a + ', b = ' + b);
//		console.log('(a >= b)  = ' + (a >= b)); // True
//		console.log('(a != b)  = ' + (a != b)); // True
//		console.log('(a == b)  = ' + (a == b)); // False
//		console.log('(a == a)  = ' + (a == a)); // True
//		console.log('(a != ++b) = ' + (a != ++b)); // False
//		console.log('(a > b)   = ' + (a > b));  // False
//		console.log('----------------------------------------------------');
//		console.log('Special comparisons: ');
//		let zeroInt = 0;
//		let oneInt = 1;
//		let zeroFloat = 0.0;
//		let oneFloat = 1.0;
//		
//		let emptyStr = '';
//		let oneStr = '1';															
//		let str = 'JavaScript';
//		
//		let nullValue = null;
//		let emptyObject = {};
//		console.log('0 == 0.0 = ' + (zeroInt == zeroFloat));
//		console.log('1 == "1" =' + (oneInt == oneStr));
//		console.log('1 === "1" =' + (oneInt === oneStr));
//		console.log('0 == "" = ' + (zeroInt == emptyStr));
//		console.log('0 === "" = ' + (zeroInt === emptyStr));
//		console.log(nullValue == emptyStr)	


//---------------------------------------------------------other

//var a = 6;
//var b = 5;
//
//console.log(a > b ? 'a > b' : 'b > a');
//
//b += 2;
//
//console.log(a > b ? 'a > b' : 'b > a');