function outer () {
    var x = 'Outer';

        function inner () {
            var x = 'Inner';
            return x;
        }

     inner();
     return {
         x:x,
         f: inner
     };   
}

console.log(outer().x);
console.log(outer().f());