let sinon = require('sinon');

const funcs = {
    sum
};

function sum (x, y) {
    if (typeof x !== 'number') {
        throw new Error('1st arg should be number')
    }
    if (typeof y !== 'number') {
        throw new Error('1st arg should be number')
    }
    return x + y;
}

//console.log(sum(1, 2));

// ===================spy functions======================

// our function changes the real console.log 
console.log = (function () {
    const params = []; 
    const returnValues = [];
    const realConsoleLog = console.log;

    function spyFunc (...args) {
        params.push(args); // saves parameters value
        const rValue = realConsoleLog(...args);
        returnValues.push(rValue); //saves return value

        return rValue;
    }

    spyFunc.getParams = () => params;
    spyFunc.getReturnValues = () => returnValues;


    return spyFunc;
}());

// console.log('pesho');
// console.log(console.log.getParams());
// console.log(console.log.getReturnValues());


// our spy function changees thee sum()
const spySum = (function () {
    const params = []; 
    const returnValues = [];
    const realFunc = sum;

    function spyFunc (...args) {
        params.push(args); // saves parameters value
        const rValue = realFunc(...args);
        returnValues.push(rValue); //saves return value

        return rValue;
    }

    spyFunc.getParams = () => params;
    spyFunc.getReturnValues = () => returnValues;

    return spyFunc;
}());

// spySum(4,5);
// console.log(spySum.getParams()); // [ [4, 5] ]
// console.log(spySum.getReturnValues()); [9]




// WITH SINON SPIES

sinon.spy(console, 'log');

//spying real functions make them execute/run

console.log.restore();

// WITH SINON STUB

// in tests beforeEach sinon.stub(console, 'log');

function unit () {
    console.log('gosho');
}

// in tests onsole.log.restore();

// dont call the real function and dont execute it/run

function unit1 () {
    funcs.sum(1, 1);
    console.log(funcs.sum(4, 5));
}

module.exports = {
	unit, unit1, funcs
};