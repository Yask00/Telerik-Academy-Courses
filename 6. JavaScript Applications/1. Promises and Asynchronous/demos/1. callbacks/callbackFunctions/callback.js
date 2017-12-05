//To be callback function creation
function genericPoemMaker (name, gender) {
    console.log(name + ' is finer than fine wine');
    console.log('Altruistic and noble for the modern time');
    console.log('Always admirably adorned with the latest style');
    console.log('A ' + gender + ' of unfortunate tragedies who still manages a smile');
}

function getUserInput (firstName, lastName, gender, callback) {
    var fullName = firstName + ' ' + lastName;

    //make sure callback is really a function
    if (typeof callback === 'function') {
        callback(fullName, gender);
    }
}

//call the last function with callback function at the end
getUserInput('MICHAEL', 'GEORGIEV', 'MAN', genericPoemMaker);

//Note the following ways we frequently use callback functions in JavaScript, 
//especially in modern web application development, in libraries, and in frameworks

//For asynchronous execution (such as reading files, and making HTTP requests)
//In Event Listeners/Handlers
//In setTimeout and setInterval methods
//For Generalization: code conciseness