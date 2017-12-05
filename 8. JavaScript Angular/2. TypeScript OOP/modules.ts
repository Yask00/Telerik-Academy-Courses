// Modules are executed within their own scope, not in the global scope
// Variables, functions, classes, etc. declared in a module are not visible outside the module
// Unless they are explicitly exported using one of the export forms.



// stringValidator.ts file
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

// ZipCodeValidator.ts file
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator as mainValidator };

// Importing
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();