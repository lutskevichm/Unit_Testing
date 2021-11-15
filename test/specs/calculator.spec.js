const Calculator = require('../../app/Calculator');
const {
    expect
} = require('chai');

describe('scenarios for add method', function () {
    let validator;
    beforeEach(function () {
        validator = new Calculator();
    });
    afterEach(function () {
        validator = null;
    });
    it('[positive] should return sum for positive numbers', function () {
        expect(validator.add(1, 2, 7)).to.be.equal(10);
    });
    it('[positive] should return sum for negative numbers', function () {
        expect(validator.add(-1, -2, -3)).to.be.equal(-6);
    });
    it('[positive] should return sum for positive & negative numbers', function () {
        expect(validator.add(-1, 100)).to.be.equal(99);
    });
    it('[positive] should return sum for nulls', function () {
        expect(validator.add(0, 0, 0)).to.be.equal(0);
    });
    it('[positive] should return sum for floats', function () {
        expect(validator.add(10, 28.69)).to.be.equal(38.69);
    });
    it('[positive] should return sum for max safe integer', function () {
        expect(validator.add(1, 9007199254740990)).to.be.equal(9007199254740991);
    });
    it('[positive] should return sum for min safe integer', function () {
        expect(validator.add(-40000, -9007199254700991)).to.be.equal(-9007199254740991);
    });
    it('[positive] should return null sum for empty array', function () {
        expect(validator.add()).to.be.equal(0);
    });
    it('[positive] should return sum array of 20 numbers', function () {
        expect(validator.add(1, 2, 3, 100, 1000, 852, -9000, 89, 84, -9007199254740991, 852, 1000, -6, 14, 15, -5000, 1700, 20, 9000, 100000000000)).to.be.equal(-9007099254740264);
    });
    it('[negative] should return error for chars', function () {
        expect(() => validator.add(1, 'a')).to.throw(`[1,a] is not an array of "Numbers"`);
    });
    it('[negative] should return error for string', function () {
        expect(() => validator.add(2, 'string')).to.throw(`[2,string] is not an array of "Numbers"`);
    });
});

describe('scenarios for multiply method', function () {
    let validator;
    beforeEach(function () {
        validator = new Calculator();
    });
    afterEach(function () {
        validator = null;
    });
    it('[positive] should return product of positive numbers', function () {
        expect(validator.multiply(1, 2, 7)).to.be.equal(14);
    });
    it('[positive] should return product of negative numbers', function () {
        expect(validator.multiply(-1, -2, -3)).to.be.equal(-6);
    });
    it('[positive] should return product of positive & negative numbers', function () {
        expect(validator.multiply(-1, 100)).to.be.equal(-100);
    });
    it('[positive] should return product of nulls', function () {
        expect(validator.multiply(0, 0, 0)).to.be.equal(0);
    });
    it('[positive] should return product of floats', function () {
        expect(validator.multiply(2, 28.6)).to.be.equal(57.2);
    });
    it('[positive] should return product of floats', function () {
        expect(validator.multiply(10, 28.69)) - 286.9 < 0.000001;
    });
    it('[positive] should return product of max safe integer', function () {
        expect(validator.multiply(1, 9007199254740991)).to.be.equal(9007199254740991);
    });
    it('[positive] should return product of min safe integer', function () {
        expect(validator.multiply(1, -9007199254740991)).to.be.equal(-9007199254740991);
    });
    it('[positive] should return null product for empty array', function () {
        expect(validator.multiply()).to.be.equal(0);
    });
    it('[positive] should return product of array of 20 numbers', function () {
        expect(validator.multiply(1, 2, 3, 10, 1, 5, 2, 5, 2, 10)).to.be.equal(60000);
    });
    it('[negative] should return error for chars', function () {
        expect(() => validator.multiply(1, 'a')).to.throw(`[1,a] is not an array of "Numbers"`);
    });
    it('[negative] should return error for string', function () {
        expect(() => validator.multiply(2, 'string')).to.throw(`[2,string] is not an array of "Numbers"`);
    });
});