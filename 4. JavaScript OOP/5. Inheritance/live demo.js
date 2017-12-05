class Mammal {
    constructor(age){
        this._age = age;
    }

    walk (){
        console.log('Calling Mammal.walk()');
    }

    get fullname (){
        throw new Error ('Mammals dont have names');
    }

    set fullname (x){
        throw new Error ('Mammals dont have names');
    }
}

class Person extends Mammal {
    constructor(fname, lname, age){
        super(age);
        this._fname = fname;
        this._lname = lname;
    }

    get fullname (){
        return this._fname + ' ' + this._lname;
    }

    set fullname(newFullName){
        const splittedNames = newFullName.split(' ');
        this._fname = splittedNames[0];
        this._lname = splittedNames[1];

        return this._fname + ' ' + this._lname;

    }

    say (text) {
        console.log(`${this._name}: ${text}`);
    }

    walk () {
        console.log('Calling Person.walk()');super.walk();
    }
}

class Zebra extends Mammal {
    constructor (age){
        super(age);
    }
}

let p = new Person ('Pesho', 'Goshov', 42);
console.log(p);
console.log(p.fullname);

p.fullname = 'Gosho Petrov';
console.log(p);
console.log(p.fullname);

let z = new Zebra (15);
console.log(z);
//console.log(z.fullname); // throw new Error ('Mammals dont have names');