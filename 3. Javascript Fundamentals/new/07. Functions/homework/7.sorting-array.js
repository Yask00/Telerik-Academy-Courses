function sortArray (args) {
        var len = args[0],
            numbers = args[1].split(' ').map(Number);

        return sortByDescendingOrder(numbers).reverse().join(' ');

            function sortByDescendingOrder (array) {
                var i, len, maxEl, maxElIndex, temp;

                for ( i = 0, len = array.length; i < len; i+=1) {
                maxEl = getMax(i, array);
                maxElIndex = array.indexOf(maxEl, i);
                temp = array[i];
                array[i] = maxEl;
                array[maxElIndex] = temp;
                }   
                return array; 
            }

         function getMax(index, numArray) {
            var i, len,
              maxElement = Number.NEGATIVE_INFINITY;

            for (i = index, len = numArray.length; i < len; i += 1) {
              if (numArray[i] > maxElement) {
                maxElement = numArray[i];
              }
            }
            return maxElement;
        }
}

console.log(sortArray(['6', '3 4 1 5 2 6']));
console.log(sortArray(['10', '36 10 1 34 28 38 31 27 30 20']));
console.log(sortArray(['4', '2 -2 2 0'])); 
