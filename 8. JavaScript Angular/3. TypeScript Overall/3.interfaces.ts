interface LabelledValue {
    label: string;
}

function printLabel (labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// ---------------------------------------------------Readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5 // error!


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

// ---------------------------------------------------Function Types with INTERFACE
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > -1;
}

//--------------------------------------------------- Indexable Types
interface StringArray{
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// when a StringArray is indexed with a number, it will return a string.

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
myArray1[2] = "Mallory"; // error!

//--------------------------------------------------- Class Types
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface{
    currentTime: Date;

    constructor(h: number, m: number){

    }

    setTime(d: Date){
        this.currentTime = d;
    }
}

// ---------------------------------------------------Difference between the static and instance sides of classes
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterfacee;
}

interface ClockInterfacee{
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfacee{
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterfacee {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterfacee {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);