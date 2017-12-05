class Animall {
    name: string;

    constructor(theName: string){
        this.name = theName;
    }

    move(distanceInMeters: number = 5){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animall {
    constructor(name: string){
        super(name);
    }

    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animall {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animall = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// -------------------------------------------------------------Public, private, and protected modifiers
// Public by default-----

class Animalll {
    private name: string;

    constructor(theName: string){
        this.name = theName;
    }
}

new Animalll("Cat").name; // Error: 'name' is private;

// Protected-----

class Person {
    protected name: string;

    protected constructor(name: string){
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
let john = new Person("John"); // Error: The 'Person' constructor is protected

// readonly -----
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

// -------------------------------------------------------------Getters And Setters
let passcode = "secret passcode";

class Employeee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employeee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

//---------------------------------------------------------------Abstract classes

abstract class Department {
    constructor(public name: string){

    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type