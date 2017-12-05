let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

enum Color {Red, Green, Blue}
let c: Color = Color.Green; // 2
let colorName: string = Color[2]; // Blue

// Declare Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function warnUser(): void { // the return type of functions that do not return a value
    alert("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}