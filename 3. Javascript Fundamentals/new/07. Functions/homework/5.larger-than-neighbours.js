function largerThanNeighbours (args) {
        let N = args.shift(),
            numbers = args[0].split(' ').map(Number);
       
        console.log(checkNeighbours(numbers)); 

        function checkNeighbours (numArray) {
           var i, len, counter = 0,
           before, current, next;

           for ( i = 1; i < numArray.length - 1; i+=1) {
           before = +numArray[i - 1];
           current = +numArray[i];
           next = +numArray[i + 1];

           if (current > before && current > next) {
               counter += 1;
           }    
       }
         return counter; 
       }
   }

   largerThanNeighbours(['6', '-26 -25 -28 31 2 27']);