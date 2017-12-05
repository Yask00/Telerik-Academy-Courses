let chai = require('chai'); // syntax 
// expect, should, assert

let expect = chai.expect;
let assert = chai.assert;

let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);

let unit = require('./demo').unit;


describe('Tests', () => {
    describe('', () => {
        beforeEach(() => {

        });

        afterEach(() => {

        });

        it('test1', () => {
           
        });
    });
});