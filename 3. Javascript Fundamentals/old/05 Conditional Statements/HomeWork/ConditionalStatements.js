//ExchangeIfGreater

//function exchangeIfGreater (args) {
//	var a = parseFloat(args[0]);
//	var b = parseFloat(args[1]);
//
//	if (a > b) {
//		console.log(b + ' ' + a);
//	}
//	else{
//		console.log(a + ' ' + b);
//	}
//	
//}
//
//exchangeIfGreater(['5', '2']);
//exchangeIfGreater(['3', '4']);
//exchangeIfGreater(['5.5', '4.5']);


//02. Multiplication Sign

//function exchangeIfGreater (args) {
//	var a = parseFloat(args[0]);
//	var b = parseFloat(args[1]);
//	var c = parseFloat(args[2]);
//
//	var result = (a * b * c);
//	
//	if (result < 0) {
//		console.log('-');
//	}
//	else if (result == 0 && result == -0) {
//		console.log('0');
//	}
//	else{
//		console.log('+');
//	}
//
//}
//exchangeIfGreater(['5', '2', '2']);
//exchangeIfGreater(['-2', '-2', '1']);
//exchangeIfGreater(['-2', '4', '3']);
//exchangeIfGreater(['0', '-2.5', '4']);
//exchangeIfGreater(['-1', '-0.5', '-5.1']);


//03. The biggest of Three //missed = in >=

//function greaterOfThree (args) {
//	var a = parseFloat(args[0]);
//	var b = parseFloat(args[1]);
//	var c = parseFloat(args[2]);
//
//	if (a >= b && a >= c) {
//		console.log(a);
//	}
//	else if(b >= a && b >= c){
//			console.log(b);
//	}
//
//	else if(c >= a && c >= b){
//		console.log(c); 
//	}
//	else  {
//		console.log('0');
//	}
//}
//
//greaterOfThree(['5', '2', '2']);
//greaterOfThree(['-2', '-2', '1']);
//greaterOfThree(['-2', '4', '3']);
//greaterOfThree(['0', '-2.5', '5']);
//greaterOfThree(['-0.1', '-0.5', '-1.1']);


//04. Sort 3 numbers

//function sortThreeNumbers (args) {
//	var a = parseFloat(args[0]);
//	var b = parseFloat(args[1]);
//	var c = parseFloat(args[2]);
//	
//
//	if (a >= b && a >= c) {
//		if (b >= c) {
//			console.log(a + ' ' + b + ' ' + c);
//		}
//		else{
//			console.log(a + ' ' + c + ' ' + b);
//		}
//	}
//
//	else if (b >= a && b >= c) {
//		if (a >= c) {
//			console.log(b + ' ' + a + ' ' + c);
//		}
//		else{
//			console.log(b + ' ' + c + ' ' + a);
//		}
//	}
//
//	else if (c >= a && c >= b) {
//		if (a >= b) {
//			console.log(c + ' ' + a + ' ' + b);
//		}
//		else{
//			console.log(c + ' ' + b + ' ' + a);
//		}
//	}
//}
//
//sortThreeNumbers(['5', '1', '2']);
//sortThreeNumbers(['-2', '-2', '1']);
//sortThreeNumbers(['-2', '4', '3']);
//sortThreeNumbers(['0', '-2.5', '5']);
//sortThreeNumbers(['-1.1', '-0.5', '-0.1']);
//sortThreeNumbers(['10', '20', '30']);
//sortThreeNumbers(['1', '1', '1']);


//05. Digit as word
//function digitAsWord (args) {
//	switch (+args) {
//
//		case 0: console.log('zero');break;
//		case 1: console.log('one');break;
//		case 2: console.log('two');break;
//		case 3: console.log('three');break;
//		case 4: console.log('four');break;
//		case 5: console.log('five');break;
//		case 6: console.log('six');break;
//		case 7: console.log('seven');break;
//		case 8: console.log('eight');break;
//		case 9: console.log('nine');break;
//		default:console.log('not a digit');break;
//	}
//}
//
//digitAsWord(['2']);
//digitAsWord(['1']);
//digitAsWord(['0']);
//digitAsWord(['5']);
//digitAsWord(['-0.1']);
//digitAsWord(['hi']);
//digitAsWord(['9']);
//digitAsWord(['10']);


//06. Quadratic equation

//function calculateRoots(args) {
//	var discriminant,
//		x1,
//		x2,
//		a = +args[0],
//		b = +args[1],
//		c = +args[2];
//	discriminant = (b * b) - (4 * a * c);
//
//	if (discriminant < 0) {
//		return 'no real roots';
//	} else if (!discriminant) {
//		x1 = -b / (2 * a);
//		return 'x1=x2=' + x1.toFixed(2);
//	} else {
//		x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
//		x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
//
//		return 'x1=' + x1.toFixed(2) + ';' + ' x2=' + x2.toFixed(2);		
//	}
//}
//
//console.log(calculateRoots(['2', '5', '-3']));
//console.log(calculateRoots(['-1', '3', '0']));
//console.log(calculateRoots(['-0.5', '4', '-8']));
//console.log(calculateRoots(['5', '2', '8']));
//console.log(calculateRoots(['0.2', '9.572', '0.2']));


//07 The biggest of five numbers

//function biggestOfFive (args) {
//    var a = +args[0];
//    var b = +args[1];
//    var c = +args[2];
//    var d = +args[3];
//    var e = +args[4];
//   
//
//    if (a >= b && a >= c && a >= d && a >= e )  {
//        console.log(a);
//    }
//    else if (b >= a && b >= c && b >= d && b >= e )  {
//        console.log(b);
//    }
//    else if (c >= a && c >= b && c >= d && c >= e )  {
//        console.log(c);
//    }
//    else if (d >= a && d >= b && d >= c && d >= e )  {
//        console.log(d);
//    }
//    else if (e >= a && e >= b && e >= c && e >= d )  {
//        console.log(e);
//    }
//    else  {
//		console.log('0');
//	}
//     
//}
//biggestOfFive(['7', '8', '9', '10', '11']);
//biggestOfFive(['5', '2', '2', '4', '1']);
//biggestOfFive(['-2', '-22', '1', '0', '0']);
//biggestOfFive(['-2', '4', '3', '2', '0']);
//biggestOfFive(['0', '-2.5', '0', '5', '5']);
//biggestOfFive(['-3', '-0.5', '-1.1', '-2', '-0.1']);



//08. Number as words

function convertNumberToWords(args) {
	var number = +args[0];
	var result = '';
	var onesLow = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var onesUp = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	var tensLow = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
	var tensUp = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',];
	var teensLow = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var teensUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

	var hundreds = number / 100 | 0;	
	var tens = (number / 10) % 10 | 0;	
	var ones = number % 10;
	
	if (hundreds === 0 && tens === 0) {
		result = onesUp[ones];
	} else if (hundreds === 0) {
		if (tens === 1) {
			result = teensUp[ones];
		} else {
			if (ones === 0) {
				result = tensUp[tens];
			}
			else {
				result = tensUp[tens] + ' ' + onesLow[ones];
			}	
		}
	} else {
		if (tens === 0 && ones === 0) {
			result = onesUp[hundreds] + ' hundred';
		} else if (ones === 0) {
			result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens];
		} else if (tens === 0){
			result = onesUp[hundreds] + ' hundred' + ' and ' + onesLow[ones];
		} else {
			if (tens === 1 && ones >= 1) {
				result = onesUp[hundreds] + ' hundred' + ' and ' + teensLow[ones];
			} else {
				result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens] + ' ' + onesLow[ones];
			}
		}
	}

	return result;
}

console.log(convertNumberToWords(['0']));
console.log(convertNumberToWords(['9']));
console.log(convertNumberToWords(['10']));
console.log(convertNumberToWords(['12']));
console.log(convertNumberToWords(['19']));
console.log(convertNumberToWords(['25']));
console.log(convertNumberToWords(['98']));
console.log(convertNumberToWords(['273']));
console.log(convertNumberToWords(['400']));
console.log(convertNumberToWords(['501']));
console.log(convertNumberToWords(['617']));
console.log(convertNumberToWords(['711']));
console.log(convertNumberToWords(['999']));