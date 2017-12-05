//function apps (args) {
//    var numbersCount = args.shift(), //removes first number;
//        searchedNumber = +args.pop(),
//        count = 0;
//
//        for (var i = 0; i < args.length; i+=1) {
//            if (+args[i] == searchedNumber) {
//                count += 1;
//            }
//        }
//        console.log(count);
//}
//
//apps(['8', '28', '6', '73','73', '-7856', '73', '73', '-56', '73']);

function printResult (args) {
    var N = +args.shift(), //removes first element.
    searchedNumber = +args.pop(),
    numbers = args[0].split(' ').map(Number);
    
    console.log(countTimes(numbers, searchedNumber)); 

    function countTimes (numArray, numberToSearch) {
        var i, len, count = 0;

        for ( i = 0, len = numArray.length; i < len; i+=1) {
            if (numArray[i] == numberToSearch) {
                count += 1;
            }  
        }
        return count; 
        }

    }

printResult(['8','28 6 21 6 -7856 73 73 -56', '73']);