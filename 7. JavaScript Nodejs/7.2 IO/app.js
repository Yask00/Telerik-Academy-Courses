const fs = require('fs');

var filesInModelsDir = fs.readdirSync('./models'); //reads files in directory
var file = fs.readFileSync('./file.js', 'utf8'); //reads file

//async
fs.readFile('./file.js', 
            'utf8',
            (err, contents)   => {
                console.log(contents);
            }   
            ); //reads file


console.log(filesInModelsDir);
console.log(file);

let content = 'some text text text';
fs.writeFileSync('./file.txt', contents, 'utf8');