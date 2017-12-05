//1. Say Hello-------------------------------------------------

//function sayHello (args) {
//    var name = args[0];
//
//    console.log('Hello, ' + name + '!');    
//}


//2. Get largest number-------------------------------------------------

//function getLargestNumber (args) {
//    var numbers = args[0].split(' ');
//    var firstNumber = +numbers[0];
//    var secondNumber = +numbers[1];
//    var thirdNumber = +numbers[2];
//
//    if (thirdNumber > getMax(firstNumber, secondNumber))
//     {
//        return thirdNumber; 
//    }
//    else{
//        return getMax(firstNumber, secondNumber); 
//    }
//
////inside getLargestNumber function
//function getMax (x, y) {
//
//    if (x > y) {
//        return x;
//    }
//    else{
//        return y;
//    }
//    }
//}
// without console.log when submit
//console.log(getLargestNumber(['8 3 6']));
//console.log(getLargestNumber(['7 19 19']));

//3. English digit-------------------------------------------------

//function englishDigit (args) {
//    var lastDigit = +args[0]
//    [parseInt(args[0].length - 1)]; // number % 10
//    
//    return getDigit(lastDigit);
//    //console.log(getDigit(lastDigit)); // works also
//
//    function getDigit (digit) {
//        switch (digit) {
//            case 0: return 'zero'; 
//            case 1: return 'one'; 
//            case 2: return 'two'; 
//            case 3: return 'three'; 
//            case 4: return 'four'; 
//            case 5: return 'five'; 
//            case 6: return 'six'; 
//            case 7: return 'seven'; 
//            case 8: return 'eight'; 
//            case 9: return 'nine';   
//        }
//    }
//}
//

//4. Appearance count-------------------------------------------------

//function printResult (args) {
//    var N = args.shift(), //removes first element.
//    searchedNumber = parseInt(args.pop()),
//    numbers = args[0].split(' ').map(Number);  //removes and sets as searchedNumber
//    
//    //console.log(numbers);
//    //console.log(searchedNumber);
//
//    return countTimes(numbers, +searchedNumber);
//
//    function countTimes (numArray, numberToSearch) {
//        var i, len, count = 0;
//
//        for ( i = 0, len = numArray.length; i < len; i+=1) {
//            if (numArray[i] === numberToSearch) {
//                count += 1;
//            } 
//            
//        }
//        return count;
//        }
//    }
//
//
////without it when submit
//console.log(printResult(['8','28 6 21 6 -7856 73 73 -56','73']));



//5. Larger than neighbours-------------------------------------------------

//        function largerThanNeighbours (args) {
//        var N = args.shift(),  //removes first element
//        numbers = args[0].split(' ').map(Number);
//       
//        return checkNeighbours(numbers);
//
//        function checkNeighbours (numArray) {
//           var i, len, counter = 0,
//           before, current, next
//           ;
//
//           for ( i = 1, len = numArray.length; i < len; i+=1) {
//           before = numArray[i - 1];
//           current = numArray[i];
//           next = numArray[i + 1];
//
//           if (current > before && current > next) {
//               counter += 1;
//           }    
//       }
//         return counter; 
//       }
//   }
////without it when submit
//console.log(largerThanNeighbours(['6','-26 -25 -28 31 2 27']));


//6. First larger than neighbours-------------------------------------------------

//function largerThanNeighbours (args) {
//        var N = args.shift();  //removes first element
//        var numbers = args[0].split(' ').map(Number);
//        
//        
//        
//        return checkNeighbours(numbers);
//
//        function checkNeighbours (numArray) {
//            var i, len, counter = 0,
//            before, current, next
//            ;
//
//            for ( i = 1, len = numArray.length; i < len - 1; i+=1) {
//            before = numArray[i - 1];
//            current = numArray[i];
//            next = numArray[i + 1];
//
//            if (current > before && current > next) {
//                counter = i;
//                break;  
//            }   
//        }
//          return counter; 
//        }
//    }
////without it when submit
//console.log(largerThanNeighbours(['6','-26 -25 -28 31 2 27']));



//7. Sorting array-------------------------------------------------

//function sortArray (args) {
//        var len = args[0]
//        var numbers = args[1].split(' ').map(Number);
//
//        return sortByDescendingOrder(numbers).reverse().join(' ');
//
//            function sortByDescendingOrder (array) {
//                var i, len, maxEl, maxElIndex, temp;
//
//                for ( i = 0, len = array.length; i < len; i+=1) {
//                maxEl = getMax(i, array);
//                maxElIndex = array.indexOf(maxEl, i);
//                temp = array[i];
//                array[i] = maxEl;
//                array[maxElIndex] = temp;
//                }   
//                return array; 
//            }
//
//         function getMax(index, numArray) {
//            var i, len,
//              maxElement = Number.NEGATIVE_INFINITY;
//
//            for (i = index, len = numArray.length; i < len; i += 1) {
//              if (numArray[i] > maxElement) {
//                maxElement = numArray[i];
//              }
//            }
//            return maxElement;
//        }
//}
//without it when submit
//console.log(sortArray(['6', '3 4 1 5 2 6']));
//console.log(sortArray(['10', '36 10 1 34 28 38 31 27 30 20']));
//console.log(sortArray(['4', '2 -2 2 0'])); 
//if maxElement = Number.MIN_VALUE - first number is not 0 but 5e-324
