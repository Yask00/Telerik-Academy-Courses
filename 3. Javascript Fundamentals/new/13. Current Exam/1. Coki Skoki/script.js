function solve (args) {
    var numbers = args.slice(1).map(Number);
    var sum = 0;

    if (numbers[0] % 2 == 1) {
        sum = 1; 
    } 
    else { 
        sum = 0; 
    } 

    for (var i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 !== 0) {
                 sum *= numbers[i];
                 sum %= 1024;  
         }

        else if (numbers[i] % 2 === 0){
                sum =  sum + numbers[i];
                sum = sum % 1024;
                i += 1;
         }
         else{
             //
         }
    }

    console.log(sum);
}

solve(['4', '0', '2', '4', '2']); //4

solve(['9', '9', '9', '9', '9' ,'9', '9', '9', '9', '9']); //329
