/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function solve() {
	return function sum(numArr) {
		var sum = 0;

		if (!numArr.length) {
			return null;
		}

		if (!Array.isArray(numArr)) { //????
			throw 'Error undefined';
		}

        for (var i = 0; i < numArr.length; i+=1) {
			if (!Number(numArr[i])) {
				throw 'Error not number';
			}
			else{
				sum += +(numArr[i]);
			}  
        }
		return sum;
	};
}


module.exports = solve;

//console.log(solve()([5,7]));


//old solution

//function solve (arr) {
//    
//		if (!arr.length) {
//		return null;
//    }
//
//		if (!Array.isArray(arr)) {
//				throw new Error('Argument is not an array');
//				}
//
//		if (!arr) {
//        throw ('Array is not defined');
//    }
//
//    if (!arr.every(function (num) {
//		return num == Number(num);
//		})) 	{
//			throw new Error('Every array element must be or convortable to a number');
//			}
//
//	return arr.reduce(function (a, b) {
//		b = +b;
//		return a + b;
//    }, 0);  
//
//}

//console.log(solve([1, 2, 3]));
//console.log(solve([]));
//console.log(solve(["1", "2"]));


