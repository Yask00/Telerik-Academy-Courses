function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x+y; };

// The parameters 'x' and 'y' have the type number
let myAdd2: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

add(5, 6);

myAdd(4, 3);
myAdd2(1, 2);


// -------------------------------------------- optional parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

