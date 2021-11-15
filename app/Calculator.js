/**
 *
 * A simple class containing method Calculator
 * @class Calculator
 */
class Calculator {
    /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
    constructor() {};
    /**
     *
     *
     * @param {Array<Number>} arrayofNumbers array of numbers to go through
     * @return {int} add result
     * @memberof NumberValidator
     */
    add(...arrayofNumbers) {
        if (Array.isArray(arrayofNumbers) &&
            arrayofNumbers.every((item) => typeof item === 'number')) {
            return arrayofNumbers.reduce((a, b) => a + b, 0);
        } else {
            throw new Error(`[${arrayofNumbers}] is not an array of "Numbers"`);
        }
    }
    /**
     *
     *
     * @param {Array<Number>} arrayofNumbers array of numbers to go through
     * @return {int} multiply result
     * @memberof NumberValidator
     */
    multiply(...arrayofNumbers) {
        if (Array.isArray(arrayofNumbers) &&
            arrayofNumbers.every((item) => typeof item === 'number') &&
            arrayofNumbers.length > 0) {
            return arrayofNumbers.reduce((a, b) => a * b);
        } else {
            if (arrayofNumbers.length === 0) {
                return 0;
            } else {
                throw new Error(`[${arrayofNumbers}] is not an array of "Numbers"`);
            }
        }
    }
}

module.exports = Calculator;