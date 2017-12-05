var pesho = 'Pesho';
console.log(pesho);
var firstName = "Pesho";
var age = 20;
var firstSentence = "My name is " + firstName + ".";
var lastSentence = "I am " + age + " years old.";
function printTwoSentences(x, y) {
    console.log(x + " " + y);
}
printTwoSentences(firstSentence, lastSentence); // My name is  Pesho. I am 20 years old.
// BASIC TYPES -----------------------------------------
// Arrays-------------
var list = [1, 2, 3];
// Enums --------------
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorNumber = Color.Green;
console.log(colorNumber); // 2
var colorName = Color[1];
console.log(colorName); // Red
// Any-------------
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list1 = [1, true, "Pesho"];
// Unions -------------
var example;
example = "Pesho"; // OK
// example = true; // Error
example = 10; // OK
// Tuples -------------
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
function warnUser() {
    alert("This is my warning message");
}
function error(message) {
    throw new Error(message);
}
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now, returns "Bob"
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right, returns "Bob Adams"
