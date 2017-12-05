var person1 = {
    firstName: 'Jon',
    lastName: 'Kuperman'
};

var person2 = {
    firstName: 'Kelly',
    lastName: 'King'
};

function say (greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Call'); //CALL  
say.call(person2, 'Call'); //CALL

say.apply(person1, ['Apply']); //APPLY
say.apply(person2, ['Apply']); //APPLY

//BIND
 
function sayBind() {
    console.log('Bind ' + this.firstName + ' ' + this.lastName);
}
 
var sayHelloJon = sayBind.bind(person1);
var sayHelloKelly = sayBind.bind(person2);
 
sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King


// call(context, arg0, arg1, ...)
// Invokes the function with this set to context and the given args: arg0, arg1, etc...

// apply(context, [arg0, arg1, …])
// Invokes the function with this set to context and the arguments are given as an array [arg0, …]