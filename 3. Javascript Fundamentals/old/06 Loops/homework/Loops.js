//1. Numbers

//function numbersFromOneToN (args) {
//	var number = args[0];
//	var i;
//	var s = '';
//	for ( i = 1; i <= number; i++) {
//		s += i + ' ';
//	}
//	console.log(s);
//}
//numbersFromOneToN(['5']);
//numbersFromOneToN(['1']);


//2. MMSA //added + to args[0]... // change if/else to for loops

//function mMSA(args) {
//    var min = +args[0], max = +args[0], sum = 0, avg = 0, count = 0;
//    
//    count = args.length;
//    for(var i = 0; i < args.length; i += 1) {
//        if (min > +args[i]) {
//            min = +args[i];
//        }
//        if (max < +args[i]) {
//            max = +args[i];
//        }
//        sum += +args[i];
//    }
//    avg = sum / count;
//    console.log('min=' + min.toFixed(2));
//    console.log('max=' + max.toFixed(2));
//    console.log('sum=' + sum.toFixed(2));
//    console.log('avg=' + avg.toFixed(2));
//}
//
//mMSA(['2', '5', '1']);
//mMSA(['2', '-1', '4']);


//3. Matrix of numbers

//function matrixOfNnumbers (args) {
//	var number = +args[0];
//	
//	var  result = '';
//	
//
//	for (var i = 1; i <= number ; i+=1) {
//		for (var j = i; j < number + i; j+=1) {
//				result += j + ' ';
//		}
//		console.log(result);
//		result = ''; //cleans result and loops first for again
//	}
//}
//
//
//matrixOfNnumbers(['2']);
//matrixOfNnumbers(['3']);
//matrixOfNnumbers(['4']);


//5. Hex to Decimal

//function hexToDecimal (args) {
//	var hex = args[0];
//	var decimal = 0;
//	var hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//
//	for (var i = hex.length -1 ; i >= 0; i-=1) {
//		
// 	decimal += hexDigits.indexOf(hex[i]) * Math.pow(16, hex.length - i - 1);
//		
//	 }
//	console.log(decimal);
//}
//	
//
//hexToDecimal(['FE']);
//hexToDecimal(['1AE3']);
//hexToDecimal(['4ED528CBB4']);