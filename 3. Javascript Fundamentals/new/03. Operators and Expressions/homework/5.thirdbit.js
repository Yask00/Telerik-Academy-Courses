
function solve (args) {
    var inputNumber = +args[0];
    var binaryNumber = inputNumber.toString(2);    
      
    console.log(binaryNumber);
    
    var thirdbit = (((binaryNumber / 100) % 2) | 0);
   
   //console.log(thirdbit);
  
    if (thirdbit == 1) {
        console.log('1');
    }
    else{
        console.log('0');
    }
}

solve(['1024']);

//function solve(args) {
//    var a = +args[0];
//    var digit = a.toString(2);
//    var check = digit.length - 4;
//    if(digit.length < 4) {
//    return 0;
//    }
//    return digit[check];
// }

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
