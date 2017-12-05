//01. Odd or Even

//function solve (args) {
//    var a = +args[0];
//
//if (a % 2 === 0) {
//    console.log('even' + ' ' + a); 
//}
//else{
//    console.log('odd' + ' ' + a);
//} 
//   
//}
//
//solve(['3']);
//solve(['2']);
//solve(['-2']);
//solve(['-1']);
//solve(['0']);


//02. Divide by 7 and 5
//
//function divideSevenFive (args) {
//    
//    var number = args[0];
//
//    if (number % 5 == 0 && number % 7 == 0) 
//        {
//            console.log(true + ' ' + number);
//        }
//    else
//        {
//        console.log(false + ' ' + number);
//        }
//}
//
//divideSevenFive(['3']);
//divideSevenFive(['0']);
//divideSevenFive(['5']);
//divideSevenFive(['7']);
//divideSevenFive(['35']);
//divideSevenFive(['140']);


//03. Rectangles

//function rectangles (args) {
//    var width = args[0];
//    var height = args[1];
//
//    var area = (width * height).toFixed(2);
//    var perimeter = ((2 * width) + (2 * height)).toFixed(2);
//
//    //console.log((width * height).toFixed(2) + ' ' + ((2 * width) + (2 * height)).toFixed(2));
//    console.log(area + ' ' + perimeter);
//}
//
//rectangles(['2.5', '3']);
//rectangles(['5', '5']);
//rectangles(['3', '4']);


//04. Third Digit

//function thirdDigit (args) {
//    var number = args[0];
//    var thirdDigit = (number / 100) % 10;
//    var searchDigit = 7;
//
//    if ((thirdDigit | 0) == searchDigit) {
//        console.log('true');
//    }
//    else{
//        console.log('false' + ' ' + (thirdDigit | 0));
//    }
//}
//
//thirdDigit(['5']);
//thirdDigit(['701']);
//thirdDigit(['9703']);
//thirdDigit(['877']);
//thirdDigit(['777877']);
//thirdDigit(['9999799']);


//05 Third Bit

//function thirdBit (args) {
//    var number = args[0];
//
//    var moveLeft = 3;
//    var mask = 1 << moveLeft;
//
//    var numberAndMask = number & mask; // 1 or 0
//    var result = numberAndMask >> moveLeft;
//
//    console.log(result);
//}
//
//thirdBit(['15']);
//thirdBit(['1024']);


//06. Point in a Circle
//function PointInCircle (args) {
//    var x = args[0];
//    var y = args[1];
//
//    var distance = Math.sqrt(x*x + y*y);
//
//    console.log((distance <= 2) ? 
//    'yes ' + distance.toFixed(2) : 
//    'no ' + distance.toFixed(2));
//}
//
//PointInCircle(['-2', '0']);
//PointInCircle(['-1', '2']);
//PointInCircle(['1.5', '-1']);
//PointInCircle(['-1.5', '-1.5']);
//PointInCircle(['100', '-30']);
//PointInCircle(['0', '0']);
//PointInCircle(['0.2', '-0.8']);
//PointInCircle(['0.9', '-1.93']);
//PointInCircle(['1', '1.655']);
//PointInCircle(['0', '1']);


//07. Prime Check

//function primeCheck (args) {
//    var number = args[0];
//
//    if (number < 0 || number == 0 || number == 1 ) {
//        console.log('false');
//    }
//    else{
//        for (var i = 2; i < number; i++) {
//            if (number % i == 0) {
//                console.log('false');
//                return;
//            }
//            
//        }
//        console.log('true');
//    }
//}    
//primeCheck(['2']);
//primeCheck(['23']);
//primeCheck(['-3']);
//primeCheck(['0']);
//primeCheck(['1']);


//08. Trapezoids
//
//function Trapezoids (args) {
//    var a = parseFloat (args[0]);
//    var b = parseFloat (args[1]);
//    var h = parseFloat (args[2]);
//
//    var area =  ( ((a + b) * h) / 2).toFixed(7);
//    console.log(area);
//}
//
//Trapezoids(['5', '7', '12']);
//Trapezoids(['2', '1', '33']);
//Trapezoids(['8.5', '4.3', '2.7']);
//Trapezoids(['100', '200', '300']);
//Trapezoids(['0.222', '0.333', '0.555']);


//09. Point, Circle, Rectangle

//function pointCircleRectangle (args) {
//    var x = args[0];
//    var y = args[1];
//    var radius = 1.5;
//    var distance = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
//    var result = '';
//
//    if (distance <= radius) {
//        result += 'inside circle';
//    }
//    else{
//        result += 'outside circle';
//    }
//
//    if (x >= -1 && x <= 5 && y >= -1 && y <= 1) {
//         result += " inside rectangle";
//    }
// else {
//        result += " outside rectangle";
//}
//
//    console.log(result);
//}
//
//pointCircleRectangle(['2.5', '2']);
//pointCircleRectangle(['0', '1']);
//pointCircleRectangle(['2.5', '1']);
//pointCircleRectangle(['1', '2']);