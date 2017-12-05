function getLargest (args) {
    
    let numbers = args[0].split(' '),
        firstNumber = +numbers[0],
        secondNumber = +numbers[1],
        thirdNumber = +numbers[2];
    
    if (thirdNumber > getMax(firstNumber, secondNumber)){
        console.log(thirdNumber); 
    }
    else{
        console.log(getMax(firstNumber, secondNumber));  
    }   
   
    function getMax (x, y) {
        let currentNumber = Math.max(x, y);
        return currentNumber;
    }
}

getLargest(['23 21 22']);