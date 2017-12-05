function largerThanNeighbours (args) {
        var N = args.shift();  //removes first element
        var numbers = args[0].split(' ').map(Number);
        
        
        
        console.log(checkNeighbours(numbers)); //index of the element

        function checkNeighbours (numArray) {
            var i, len, counter = 0,
            before, current, next
            ;

            for ( i = 1, len = numArray.length; i < len - 1; i+=1) {
            before = numArray[i - 1];
            current = numArray[i];
            next = numArray[i + 1];

            if (current > before && current > next) {
                counter = i;
                break;  
            }   
        }
          return counter; 
        }
    }

    largerThanNeighbours(['6', '-26 -25 -28 31 2 27']);