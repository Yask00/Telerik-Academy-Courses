const petStore = (function (){

        class Animal {
            //constructor with 3 parameters
            constructor(name, age, sound){
                this.name = name;
                this.age = age;
                this.sound = sound;
            }
            //Get Set name
            get name(){
                return this._name;
            }

            set name(value){
                if (typeof value !== 'string' || value.length < 2) {
                     throw new Error('Name must be string value with at least 2 symbols!');
                }
                this._name = value;
            }
            //Get Set age
            get age() {
                return this._age;
            }

            set age(value) {
                if(value < 0) {
                    throw new Error('Age cannot be negative number!');
                }

            this._age = value;
            }
            //Get Set sound
            get sound() {
                return this._sound;
            }

            set sound(value) {
                if(typeof value !== 'string') {
                  throw new Error('Sound must be string!');
                }

             this._sound = value;
             }
             // makeSound method
             makeSound() {
                console.log(this.sound);
            }
            // teString method returning name plus age
            toString() {
             return `${this.name} is ${this.age} years old`;
            }
        }
        // end of class animal-------------------------------------------------------


        class Cat extends Animal{

            constructor(name, age, color){ // no sound instead color
                super(name, age, 'mew');

                this.color = color;
            }

            toString() {
                return `${super.toString()} ${this.color} cat`;
            }
        }
        //end of Cat class--------------------------------------------------------------

        class MythicalDragonHydra extends Animal{

            constructor(name, age, headsCount){ // no sound, no color
                super(name, age, 'RAWRWWR');

                if(headsCount < 2) {
                    throw new Error('MythicalDragonHydra must have at least 2 heads!');
                 }

                this._headsCount = headsCount;
            }

            get headsCount() {
                return this._headsCount;
            }

            growHead() {
           	    this._headsCount += 1;
                this.makeSound();
            }

            toString() {
                return `${super.toString()} and is a mythic dragon hydra with ${this.headsCount} heads!`;
            }
        }
        //end of Dragon class----------------------------------------------------------

        //after 3 classes what the function will return
        return{
            getCat: function(name, age, color){
                return new Cat (name, age, color);
            },
            getHydra: function(name, age, headsCount){
                return new MythicalDragonHydra(name, age, headsCount);
            }
        };

}());


const davinci = petStore.getCat('davinci', 2, 'gray'),
      petko = petStore.getHydra('petko', 1000, 5);

      davinci.makeSound();
      console.log(davinci.toString());

      petko.makeSound();
      console.log(petko.toString());

