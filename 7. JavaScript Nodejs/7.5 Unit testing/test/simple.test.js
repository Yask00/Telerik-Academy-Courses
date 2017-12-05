const { expect } = require('chai');

const getValueAfter = (value, seconds) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(value), seconds * 1000);
    });
};


describe('Tst sum', () => {

    before(() => {
        // once before all tests in this describe
        console.log('Before all');
    });

    after(() => {
        // once after all tests in this describe
        console.log('After all');
    });

    beforeEach(() => {
        // before every it tests in this describe
        console.log('Before each');
    });

    afterEach(() => {
        // after every it test in this describe
        console.log('After each');
    });

    it('should return 4', () => {
        const x = 2;
        const y = 2;

        const expected = x + y;

        expect(expected).to.eq(4);
    });

    it('should return 4 again', () => {
        const x = 2;
        const y = 2;

        const expected = x + y;

        expect(expected).to.eq(4);
    });
});

describe('Async tests', () => {
    it('wtih done()', (done) => {
        getValueAfter(5, 1)
            .then((value) => {
                expect(value).to.equal(5);
                done();
            });
    });
    it('wtih return promise', () => {
        getValueAfter(5, 1)
            .then((value) => {
                expect(value).to.equal(5);
            });
    });
});