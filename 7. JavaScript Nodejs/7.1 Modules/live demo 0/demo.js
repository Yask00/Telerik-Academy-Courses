/* globals require */           //this if for the linting
const fs = require('fs');//build in module
const os = require('os');

var contents = fs.readFileSync('demo.js', 'utf8');


console.log(contents);
console.log(os.EOL + 'Next line');