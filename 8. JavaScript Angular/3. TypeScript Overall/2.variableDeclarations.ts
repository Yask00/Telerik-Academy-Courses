for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// return 10, 10, ....., 10

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

// return 0, 1, 2..... 9

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// return 0, 1, 2..... 9

function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'

// --------------------------------------------------Const declarations
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// --------------------------------------------------Array destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// --------------------------------------------------Spread
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; // [0, 1, 2, 3, 4, 5]