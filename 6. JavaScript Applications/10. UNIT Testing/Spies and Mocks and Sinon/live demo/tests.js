let chai = require('chai'); // syntax 
// expect, should, assert

let expect = chai.expect;
let assert = chai.assert;

let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);

let unit = require('./demo').unit;
let unit1 = require('./demo').unit1;
let funcs = require('./demo').funcs;

describe('sinon tests', () => {
    describe('console.log spy stub', () => {

        beforeEach(() => {
            sinon.stub(console, 'log'); // not to excute
            sinon.stub(funcs, 'sum');
        });

        afterEach(() => {
            console.log.restore();
            funcs.sum.restore();
        });

        it('test unit1', () => {
            unit();
            expect(console.log).to.have.callCount(1);
        });

        // it('test unit2', () => { // should fail
        //     unit();
        //     expect(console.log).to.have.callCount(2);
        // });

        it('test unit3', () => {
            unit1();
            expect(console.log).to.have.callCount(1);
            expect(funcs.sum).to.have.been.calledWith(4, 5);
            //expect(console.log).to.have.been.calledWith(9);
        });
    });

    describe('console.log mocks', () => {
        let fMock;
        beforeEach(() => {
            sinon.spy(console, 'log'); // not to excute
            fMock = sinon.mock(funcs);
        });

        afterEach(() => {
            console.log.restore();
            fMock.restore();
        });


        it('test unit4', () => {
            fMock
                .expects('sum')
                .twice();

            unit1();

            fMock.verify();
        });
    });
});