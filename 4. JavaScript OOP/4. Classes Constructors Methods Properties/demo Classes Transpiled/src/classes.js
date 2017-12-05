class Animal  {
    constructor (type, name, color, age){
        if (typeof type !== 'string' || type.charAt(0) === ' ') {
            throw new Error('Type of animal must be filled with letters');
        }
        this._type = type;
        this._name = name;


        var colors = ['red', 'green', 'blue', 'black', 'white', 'Red', 'Green', 'Blue', 'Black', 'White'];
        if (!colors.includes(color)) {
          throw new Error ('This color in not part of accepted colors here');
        }
        this._color = color;

        if (age < 0 || age > 15) {
            throw new Error ('This animal s age is impossible');
        }
        this._age = age;
    }

    sound (text){
        console.log(`${this._name} says ${text}!`); //not working with this.name
    }

    printSelf() {
            console.log(this);
    }

    get nickname () {
        return this._nickname;
    }

    set nickname (nickName) {
        this._nickname = nickName;
    }
}

let firstAnimal = new Animal ('Mammal', 'Doggy', 'black', 8);

console.log(firstAnimal);             //Animal { _type: 'Mammal', _name: 'Doggy', _color: 'black', _age: 8 }

console.log(firstAnimal.name);      //undefined
console.log(firstAnimal._name);     //Doggy

firstAnimal.sound('Bau');           //Doggy says Bau!

console.log(firstAnimal._nickname);   //undefined
firstAnimal.nickname = 'Internet sensation';
console.log(firstAnimal._nickname);   //Internet sensation

console.log(firstAnimal); //Animal { _type: 'Mammal', _name: 'Doggy', _color: 'black', _age: 8, _nickname: 'Internet sensation' }

