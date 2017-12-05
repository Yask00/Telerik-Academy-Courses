class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {

    constructor(name: string) { 
        super(name); 
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { 
        super(name); 
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
// ------------------------------------------------------
class Employee {
    _fullName: string; // TODO: set private modifier
    get fullName(): string {
        return this._fullName;
    }
    set fullName(value: string) {
        if (value.length > 5) this._fullName = value;
        else throw new Error("Invalid employee name!");
    }
}

let employee = new Employee();
employee.fullName = "Pesho"; // Throws
employee.fullName = "Bob Smith"; // Just right!
// ------------------------------------------------------Static members
class Grid {
    static origin = { x: 0, y: 0 };
    constructor(public scale: number) { 
        
    }

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

// ------------------------------------------------------ Abstract Classes
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// ------------------------------------------------------ Public modifier - DEFAULT
class Animal {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// ------------------------------------------------------ Private modifier
class Animal {
    private name: string;
    constructor(name: string) { this.name = name; }
}

let cat: Animal = new Animal("Cat");
console.log(cat.name) // Error: 'name' is private;

// ------------------------------------------------------ Protected modifier
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard: Person = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error


// ------------------------------------------------------ Readonly modifier
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.