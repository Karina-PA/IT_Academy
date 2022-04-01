const Calculator = require ('../calculator');

const calc = new Calculator;

describe(`Calculator functions tests`, function() {
    
    // function add

    test.each([
        [1, 3, 4],
        [2, 43, 45],
    ]) (`should check add positive integers`, async(a, b, expected) => {
        let result = calc.add(a, b);
        expect(result).toEqual(expected);
    })

    test.each([
        [-3, -5, 8, 0],
        [-1, -10, 3, -8]
    ]) (`should check add negative integers`, async(a, b, c, expected) => {
        let result = calc.add(a, b, c);
        expect(result).toEqual(expected);
    })

    test.each([
        [9.1, 4.4, 13.5],
        [23.45, 6.79, 30.24]
    ]) (`should check add fractional numbers`, async(a, b, expected) => {
        let result = calc.add(a, b);
        expect(result).toBeCloseTo(expected);
    })

    test(`should check add string`, async() => {
        let result = calc.add(4, '45');
        expect(result).toThrow(Error);
    })

    test(`data type of value of function add should be number`, async() => {
        let result = calc.add(4, 5);
        expect(typeof result).toEqual('number');
    })

    // function multiply

    test.each([
        [1, 3, 3],
        [2, 43, 86],
    ]) (`should check multiply positive integers`, async(a, b, expected) => {
        let result = calc.multiply(a, b);
        expect(result).toEqual(expected);
    })

    test.each([
        [-3, -5, 8, 120],
        [-1, 10, 3, -30]
    ]) (`should check multiply negative integers`, async(a, b, c, expected) => {
        let result = calc.multiply(a, b, c);
        expect(result).toEqual(expected);
    })

    test.each([
        [9.1, 4.4, 40.04],
        [23.45, 6.79, 159.2255]
    ]) (`should check multiply fractional numbers`, async(a, b, expected) => {
        let result = calc.multiply(a, b);
        expect(result).toBeCloseTo(expected);
    })

    test(`should check multiply string`, async() => {
        let result = calc.multiply(4, '45');
        console.log(result);
        expect(result).toThrow(Error);
    })

    test(`data type of value of function multiply should be number`, async() => {
        let result = calc.multiply(4, 5);
        expect(typeof result).toEqual('number');
    })

    // function subtraction

    test.each([
        [3, 1, 2],
        [22, 11, 11],
    ]) (`should check subtraction positive integers`, async(a, b, expected) => {
        expect(calc.subtraction(a, b)).toEqual(expected);
    })

    test.each([
        [-3, -5, 2],
        [-1, -10, 9]
    ]) (`should check subtraction negative integers`, async(a, b, expected) => {
        expect(calc.subtraction(a, b)).toEqual(expected);
    })

    test.each([
        [9.1, 4.4, 4.7],
        [23.45, 6.79, 16.66]
    ]) (`should check subtraction fractional numbers`, async(a, b, expected) => {
        expect(calc.subtraction(a, b)).toBeCloseTo(expected);
    })

    test(`should check subtraction string`, async() => {
        expect(calc.subtraction(4, '45')).toThrow(Error);
    })

    test(`data type of value of function subtraction should be number`, async() => {
        expect(typeof calc.subtraction(4, 5)).toEqual('number');
    })

    // function divide

    test.each([
        [3, 1, 3],
        [22, 11, 2],
    ]) (`should check divide positive integers`, async(a, b, expected) => {
        expect(calc.divide(a, b)).toEqual(expected);
    })

    test.each([
        [-10, -5, 2],
        [-10, 2, -5]
    ]) (`should check divide negative integers`, async(a, b, expected) => {
        expect(calc.divide(a, b)).toEqual(expected);
    })

    test.each([
        [8.2, 4.1, 2],
        [22.44, 2, 11.22]
    ]) (`should check divide fractional numbers`, async(a, b, expected) => {
        expect(calc.divide(a, b)).toBeCloseTo(expected);
    })

    test(`should check divide string`, async() => {
        expect(calc.divide(4, '45')).toThrow(Error);
    })

    test(`should check divide by zero`, async() => {
        expect(calc.divide(4, 0)).toThrow(Error);
    })

    test(`data type of value of function divide should be number`, async() => {
        expect(typeof calc.divide(10, 5)).toEqual('number');
    })

    // function exponentiation

    test.each([
        [3, 9],
        [11, 121],
    ]) (`should check exponentiation positive integer`, async(a, expected) => {
        expect(calc.exponentiation(a)).toEqual(expected);
    })

    test.each([
        [-10, 100],
        [-5, 25]
    ]) (`should check exponentiation negative integers`, async(a, expected) => {
        expect(calc.exponentiation(a)).toEqual(expected);
    })

    test.each([
        [8.2, 67.24],
        [22.44, 503.5536]
    ]) (`should check exponentiation fractional numbers`, async(a, expected) => {
        expect(calc.exponentiation(a)).toBeCloseTo(expected);
    })

    test(`should check exponentiation string`, async() => {
        expect(calc.exponentiation('45')).toThrow(Error);
    })

    test(`data type of value of function exponentiation should be number`, async() => {
        expect(typeof calc.exponentiation(10)).toEqual('number');
    })

})