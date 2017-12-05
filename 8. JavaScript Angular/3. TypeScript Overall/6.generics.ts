function identity(arg: number): number {
    return arg;
}

function identity1<T>(arg: T): T {
    return arg;
}

// We’ve now added a type variable T to the identity function
// We say that this version of the identity function is generic, 
// as it works over a range of types

let output = identity1<string>("myString");  // type of output will be 'string'
let output1 = identity1("myString");  // type of output will be 'string'



function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}