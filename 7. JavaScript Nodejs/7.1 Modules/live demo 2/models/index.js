//default module with all smaller modules

//const Superhero = require('./superhero-model');
//const Power = require('./power-model');
//
//module.exports.getSuperhero = function  (name, secretIdentity, ...powers) {
//    return new Superhero(name, secretIdentity, ...power)
//}
//
//module.exports.getPower = function  (name) {
//    return new Power(name);
//}


//----------------------Dynamically load modules-------------------

console.log(__dirname); //root directory

const fs = require('fs');
//fs.readdirSync('./'); //current
fs.readdirSync(__dirname)
    .filter(file => file.indexOf('-model') >= 0)
    .forEach(file => {
        
        var moduleName = file[0].toUpperCase()
        + file.substring(1);

        module.exports[moduleName] = 
        require(__dirname + '/' + file)
    });