// Interfaces are just like classes
// But they do not implement functionality
// And they cannot be instantiated

interface Animal {
  readonly name: string;
  age: number;
}

// var animal = new Animal(); // Compilation error

// class Cat implements Animal {
//   // Compilation error: Animal does not implement IAnimal
// }

class Cat implements Animal {
  public readonly name: string;
  public age: number;
}

// -------------------------------------------------------

interface SquareConfig {
    color?: string;
    width?: number;
}

let mySquare = createSquare({color: "black"});

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}