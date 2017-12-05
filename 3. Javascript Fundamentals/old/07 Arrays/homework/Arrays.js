//01. Increase array members

//function allocateArray (args) {
//    
//var arr = +args[0];
//var i;
//
//for (var i = 0; i < arr; i+= 1) {
//    console.log(i * 5);
//}
//
//}
//
//
//allocateArray(['5']);
////allocateArray(['6']);


//02. Lexicographically comparison---added .split()

//function lexicoGraphically (args) {
//    var word = args[0].split('\n'),
//    firstWord = word[0],
//    secondWord = word[1];
//
//    if (firstWord > secondWord) {
//        console.log('>');
//    }
//    else if(secondWord > firstWord){
//        console.log('<');
//    }
//    else {
//        console.log('=');
//    }
//}
//
//
//lexicoGraphically(['hello\nhallo']);
//lexicoGraphically(['food\nfood']);
//lexicoGraphically(['ab\nac']);


//03. Maximal sequence
//function maximalSequence (args) {
//    args = args[0].split('\n');
//    var arrLength = +args[0];
//    var i, maxCounter = 0, currentCounter = 1;
//    
//
//    for (i = 0; i < arrLength - 1; i += 1) {
//
//        while (+args[i] === +args [i + 1]) {
//            currentCounter +=1 ;
//            i+=1; //get right back to +i while
//        }       
//        
//        if (currentCounter > maxCounter) {
//            maxCounter = currentCounter;
//        }
//        currentCounter = 1; //why this here
//       }
//       
//       console.log(maxCounter);
//    }
//maximalSequence(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']);


//04. Maximal increasing sequence
//function maxIncrease (args) {
//    args = args[0].split('\n');
//    var arrLength = +args[0];
//    var i, maxCounter = 0, currentCounter = 1;
//
//    for (i = 1; i < arrLength - 1; i += 1) { // change it from 0 to 1
//
//        while (+args[i] < +args [i + 1]) {
//             currentCounter +=1 ;
//             i+=1; //get right back to +i while
//        }       
//   
//        if (currentCounter > maxCounter) {
//        maxCounter = currentCounter;
//        }
//        currentCounter = 1; //why this here
//        }
//    console.log(maxCounter); 
//}
//
//
//maxIncrease(['8\n7\n3\n2\n3\n4\n2\n2\n4']);


//05. Selection sort
//function selectionSort (args) {
//    args = args[0].split('\n');
//    var arrLength = args[0];
//    var current = 1, temp, next;
//
//    for ( current; current <= arrLength; current+=1) {
//        
//        for (next = current + 1; next <= arrLength; next+=1) {
//            
//            if (args[current] > args[next]) {
//
//                 temp = args[next];
//                 args[next] = args[current];
//                 args[current] = temp;
//
//                  
//            }
//            
//            
//        }
//       
//    }
//    
//    for (var i = 1; i <= arrLength; i += 1) {
//           console.log(args[i]);
//           
//       }
//}
//selectionSort(['6\n3\n4\n1\n5\n2\n7']);
//selectionSort(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);


//05. Selection sort

//function selectionSort(args) {
//    var array = args[0].split('\n').map(Number),
//        iMin,
//        i,
//        j;
//
//    for (i = 1; i < array.length; i += 1) {
//        iMin = i;
//        for (j = i + 1; j < array.length; j += 1) {
//            if (array[j] < array[iMin]) {
//                iMin = j;
//            }
//        }
//
//        if (iMin != i) {
//            array[i] = array[i] + array[iMin];
//            array[iMin] = array[i] - array[iMin];
//            array[i] = array[i] - array[iMin];
//        }
//    }
//
//    // remove 1st element which is the length of array
//    array.shift();
//    // print
//    console.log(array.join('\n'));
//}
//
//selectionSort(['6\n3\n4\n1\n5\n2\n7']);
//selectionSort(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);

//06. Most frequent number
//function solve(args) {
//    var input = args[0].split('\n'),
//        n = +input[0],
//        result = {},
//        numbers = input.slice(1),
//        i,
//        len;
//
//    parseToNumber(numbers);
//    for (i = 0; i < n; i += 1) {
//        if (!result[numbers[i]]) {
//            result[numbers[i]] = 1;
//        } else {
//            result[numbers[i]]++;
//        }
//    }
//
//    maxElement = Object.keys(result).sort(function (a, b) { return result[a] - result[b]; }).reverse()[0];
//    console.log(maxElement + ' (' + result[maxElement] + ' times)');
//
//    function parseToNumber(array) {
//        array.forEach(function parse(item) {
//            item = +item;
//        });
//    }
//}
//
//solve(['5\n2\n1\n2\n1\n1']);
//solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);


//07 Binary Search

//function solve (args) {
//    
//    var array = (args + '').split('\n').map(Number),
//    n = +array[0],
//    wantedNum = +array[array.length - 1],
//    low = 0,
//    high = n -1,
//    mid = ((high + low) / 2 | 0),
//    wantedNumberIsFound = false;
//
//    array.shift();
//    array.pop();
//
//    while(low <= high){
//        if (wantedNum === +array[mid]) {
//            wantedNumberIsFound = true;
//            console.log(mid);
//            return;
//        }
//        else if(wantedNum < +array[mid]){
//            high = mid - 1;
//            mid = ((high + low) / 2 | 0)
//        }
//        else if(wantedNum > +array[mid]){
//            low = mid + 1;
//            mid = ((high + low) / 2 | 0)
//        }
//    }
//    console.log('-1');
//}
//
//solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']);


//10.Prime numbers

//function solve (args) {
//    var n = +args[0];
//    var i, len;
//
//    for (i = n; i >= 0; i--) {
//        
//        if(isPrime(i)){
//            console.log(i);
//            break;
//        }
//    }
//    
//    function isPrime (number) {
//        
//        for (j = 2; j < number; j+=1) {
//            if (number % j === 0) {
//                return false;
//                
//            }
//            
//        }
//        return true;
//    }
//}
//
//
//solve(['126']);


