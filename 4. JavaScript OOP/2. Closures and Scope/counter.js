
function createCounter(startPoint) {
    let counter = startPoint || 0;

    return function () {
        counter += 1;
        return counter;
    };
}

let counter1 = createCounter();
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter1()); //3
console.log(counter1()); //4

let counter2 = createCounter();
console.log(counter2()); //1
console.log(counter2()); //2

let counter3 = createCounter(5);
console.log(counter3()); //6
console.log(counter3()); //7
console.log(counter3()); //8
