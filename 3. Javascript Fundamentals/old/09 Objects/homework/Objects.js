//01. Planar coordinates----------------------------------------

//function solve(args) {
//    var coordinates =  args.map(Number),
//    lengths = [],
//    a,
//    b,
//    i,
//    output = 'Triangle can be built';
//    
//    function LineSize(x1, y1, x2, y2) {
//        a = Math.abs(x1- x2);
//        b = Math.abs(y1 - y2);
//
//        return Math.sqrt(a * a + b * b);
//    }
//
//    for(i = 0; i < 12; i += 4) {
//        lengths[i / 4] = LineSize(coordinates[i], coordinates[i + 1], coordinates[i + 2], coordinates[i + 3]);
//    }
//
//    if(lengths[0] + lengths[1] < lengths[2] || lengths[2] + lengths[1] < lengths[0] || lengths[0] + lengths[2] < lengths[1]){
//        output = 'Triangle can not be built';
//    }
//
//    for(i = 0; i < 3; i += 1) {
//        console.log(parseFloat(Math.round(lengths[i] * 100) / 100).toFixed(2));
//    }
//    console.log(output);
//}
//
//solve(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']);
//solve(['7', '7', '2', '2','5', '6', '2', '2','95', '-14.5', '0', '-0.123']);


//02. Remove elements----------------------------------------

//function solve (args) {
//    var arr = args;
//
//    var toRemove = arr[0];
//    
//    Array.prototype.Remove = function (toRemove) {
//        var newArray = [];
//
//        for (var i in this) {
//            if (this[i] !== toRemove && typeof this[i] !== 'function') {
//                newArray.push(this[i]); 
//            }
//        }
//        return newArray;
//    };
//    console.log(arr.Remove(toRemove).join('\n'));
//}
//
//solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);
//solve([  '_h/_','^54F#','V','^54F#','Z285','kv?tc`','^54F#','_h/_','Z285','_h/_','kv?tc`','Z285','^54F#','Z285','Z285','_h/_','^54F#','kv?tc`','kv?tc`','Z285' ]);


//05. Youngest person----------------------------------------
function solve (args) {
    var persons = [],
    youngestPerson = {},
    i;

    for ( i = 0; i < args.length;  i+=3) {
        persons[i / 3] = makePerson(args[i], args[i+1], +args[i+2]);
    }
    youngestPerson = persons[0];

    for ( i = 1; i < persons.length; i+=1) {
        if (youngestPerson.age > persons[i].age) {
            youngestPerson = persons[i]
        }  
    }

    console.log(youngestPerson.firstName + ' ' + youngestPerson.lastname);

     function makePerson (firstname, lastname, age) {
         return{
             firstName:firstname,
             lastname:lastname,
             age:age
            };
     }   
}


solve([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);

solve([
   'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]);