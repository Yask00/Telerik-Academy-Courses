function func () {
    console.log(this === global);
    console.log(this.arguments);
    console.log(arguments);
}

func(); 
// true 
// undefined
// {}

// arguments is an array like object always existing inside functions
