console.log('In supewrhero module');

const MaxSuperheroNameLength = 30;

class Superhero {
    constructor(name, secretIdentity, ...powers){
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }
}

//module.exports.Superhero = Superhero;
//module.exports.getSuperhero = function  (name, secretIdentity, ...powers) {
//    return new Superhero(name, secretIdentity, ...powers);
//}

module.exports = Superhero;