const equation = require('../app.js');

describe("Filter function", () => {

    test('adds 1 + 2 to equal 3', function () {
        expect(equation.sum(1, 2)).toBe(3);
    });

    test('subtracts second value from first', function () {
        expect(equation.difference(2, 1)).toBe(1);
    })
});