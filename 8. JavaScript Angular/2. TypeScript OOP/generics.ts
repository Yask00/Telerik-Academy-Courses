function identity<T>(arg: T): T { // <T> is a type
    return arg;
}

console.log(identity<string>("Pesho")); // Prints Pesho
console.log(identity(new Person("Pesho"))); // Type is inferred

// --------------------------------------------------

function log<T>(message: T): void {
  console.log(message.toString());
}

log("Pesho"); // Prints Pesho
log(new Person("Pesho")); // Prints Pesho


// --------------------------------------------------

function convert<T, N>(obj: T): N {
  return converter.convertTo<N>(obj);
}

convert<string, string>("Pesho"); // returns Pesho
convert<Person, Student>(new Person("Pesho")); 
// returns a Student called Pesho