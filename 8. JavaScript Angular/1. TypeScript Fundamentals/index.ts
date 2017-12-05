let pesho = 'Pesho';

console.log(pesho);


let firstName: string = "Pesho";
let age: number = 20;

let firstSentence: string = `My name is ${firstName}.`;
let lastSentence: string = `I am ${age} years old.`;

function printTwoSentences(x: string, y: string) {
  console.log(`${x} ${y}`);
}

printTwoSentences(firstSentence, lastSentence); // My name is  Pesho. I am 20 years old.


// BASIC TYPES -----------------------------------------

// Arrays-------------

let list: number[] = [1, 2, 3];

// Enums --------------

enum Color {Red = 1, Green, Blue}

let colorNumber: number = Color.Green;
console.log(colorNumber); // 2

let colorName: string = Color[1];
console.log(colorName); // Red

// Any-------------
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list1: any[] = [1, true, "Pesho"];

// Unions -------------
let example: (number | string);

example = "Pesho"; // OK
// example = true; // Error
example = 10; // OK

// Tuples -------------
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
//x = [10, "hello"]; // Error


function warnUser(): void { //Used to state that a function returns nothing:
    alert("This is my warning message");
}

function error(message: string): never { // Used for functions that always throw exceptions or never return:
      throw new Error(message);
  }

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob"
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right, returns "Bob Adams"