'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomAnimal = function () {
    function RandomAnimal(type, name, color, age) {
        _classCallCheck(this, RandomAnimal);

        if (typeof type !== 'string' || type.charAt(0) === ' ') {
            throw new Error('Type of animal must be filled with letters');
        }
        this._type = type;
        this._name = name;

        var colors = ['red', 'green', 'blue', 'black', 'white', 'Red', 'Green', 'Blue', 'Black', 'White'];
        if (!colors.includes(color)) {
            throw new Error('This color in not part of accepted colors here');
        }
        this._color = color;

        if (age < 0 || age > 15) {
            throw new Error('This animal s age is impossible');
        }
        this._age = age;
    }

    _createClass(RandomAnimal, [{
        key: 'sound',
        value: function sound(text) {
            console.log(this._name + ' says ' + text + '!'); //not working with this.name
        }
    }, {
        key: 'printSelf',
        value: function printSelf() {
            console.log(this);
        }
    }, {
        key: 'nickname',
        get: function get() {
            return this_nickname;
        },
        set: function set(nickName) {
            this._nickname = nickName;
        }
    }]);

    return RandomAnimal;
}();

var firstAnimal = new RandomAnimal('Mammal', 'Doggy', 'black', 8);

console.log(firstAnimal); //RandomAnimal { _type: 'Mammal', _name: 'Doggy', _color: 'black', _age: 8 }

console.log(firstAnimal.name); //undefined
console.log(firstAnimal._name); //Doggy

firstAnimal.sound('Bau'); //Doggy says Bau!

console.log(firstAnimal._nickname); //undefined
firstAnimal.nickname = 'Internet sensation';
console.log(firstAnimal._nickname); //Internet sensation

console.log(firstAnimal); //RandomAnimal { _type: 'Mammal', _name: 'Doggy', _color: 'black', _age: 8, _nickname: 'Internet sensation' }