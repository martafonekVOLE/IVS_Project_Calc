/**
 * @file Tests of math library for IVS Calc
 * @author David Konečný <xkonec83@stud.fit.vutbr.cz>
 * @licence : GNU GPL Version 3
 */

const {addUp, subtract, multiply, divide, factorial, toPower, squareRoot, abs, logarithm} = require('../Math');


/**
 *  Function tests basic and extended functionality with different combinations of expected data types of parameters.
 *  @function addUp_test 
 */
test('addUp_test', () => {
    /** Testing basic functionality with two integers */
    expect(addUp(1, 5)).toBe(6);
    expect(addUp(2, 2)).toBe(4);
    expect(addUp(-2, 2)).toBe(0);
    expect(addUp(-1, 5)).toBe(4);
    expect(addUp(1, -5)).toBe(-4);
    expect(addUp(-1, -5)).toBe(-6);
    expect(addUp(-2, -2)).toBe(-4);
    
    /** Testing comutativity with two integers */
    expect(addUp(5, 1)).toBe(addUp(1, 5));
    expect(addUp(-5, 1)).toBe(addUp(1, -5));
    expect(addUp(-5, -1)).toBe(addUp(-1, -5));


    /** Testing basic functionality with one integer and one double */
    expect(addUp(1, 1.234)).toBe(2.234);
    expect(addUp(1, -1.234)).toBe(-0.234); // failing - eps
    expect(addUp(-1, -1.234)).toBe(-2.234);

    /** Testing comutativity with one integer and one double */
    expect(addUp(1, 1.234)).toBe(addUp(1.234, 1));
    expect(addUp(1, -1.234)).toBe(addUp(-1.234, 1));
    expect(addUp(-1, -1.234)).toBe(addUp(-1.234, -1));


    /** Testing basic functionality with two doubles */
    expect(addUp(1.234, 2.345)).toBe(3.579);
    expect(addUp(1.234, 1.234)).toBe(2.468);
    expect(addUp(-1.234, 1.234)).toBe(0);
    expect(addUp(-1.234, 2.345)).toBe(1.111); // failing - eps
    expect(addUp(1.234, -2.345)).toBe(-1.111); // failing - eps
    expect(addUp(-1.234, -1.234)).toBe(-2.468);

    /** Testing comutativity with two doubles */
    expect(addUp(1.234, 2.345)).toBe(addUp(2.345, 1.234));
    expect(addUp(-1.234, 2.345)).toBe(addUp(-2.345, 1.234)); // failing - eps
    expect(addUp(-1.234, -2.345)).toBe(addUp(-2.345, -1.234));
});


/**
 *  Function tests basic and extended functionality with different combinations of expected data types of parameters.
 *  @function substract_test
 */
test('subtract_test', () => {
    /** Testing basic functionality with two integers */
    expect(subtract(5, 1)).toBe(4);
    expect(subtract(1, 5)).toBe(-4);
    expect(subtract(5, 5)).toBe(0);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(5, -1)).toBe(6);
    expect(subtract(-5, -1)).toBe(-4);

    /** Testing basic functionality with one integer and one double */
    expect(subtract(5, 1.234)).toBe(3.766);
    expect(subtract(1.234, 5)).toBe(-3.766);
    expect(subtract(5, -1.234)).toBe(6.234);
    expect(subtract(-5, -1.234)).toBe(-3.766);

    /** Testing basic functionality with two doubles */
    expect(subtract(2.345, 1.234)).toBe(1.111); // failing - eps
    expect(subtract(1.234, 2.345)).toBe(-1.111); // failing - eps
    expect(subtract(1.234, 1.234)).toBe(0);
    expect(subtract(-1.234, -1.234)).toBe(0);
    expect(subtract(2.345, -1.234)).toBe(3.579);
    expect(subtract(-2.345, -1.234)).toBe(-1.111); // failing - eps
});


/**
 *  Function tests basic and extended functionality with different combinations of expected data types of parameters.
 *  @function mulitiply_test
 */
test('multiply_test', () => {
    /** Testing basic funtionality with two integers */
    expect(multiply(5, 1)).toBe(5);
    expect(multiply(2, 5)).toBe(10);
    expect(multiply(5, 5)).toBe(25);
    expect(multiply(2, -5)).toBe(-10);
    expect(multiply(-2, -5)).toBe(10);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(5, 0)).toBe(multiply(55, 0));

    /** Testing comutativity with two integers */
    expect(multiply(1, 5)).toBe(multiply(5, 1));
    expect(multiply(2, 5)).toBe(multiply(5, 2));
    expect(multiply(2, -5)).toBe(multiply(-2, 5));
    expect(multiply(-2, -5)).toBe(multiply(-5, -2));


    /** Testing basic functionality with one integer and one double */
    expect(multiply(1.234, 1)).toBe(1.234);
    expect(multiply(5, 1.234)).toBe(6.17);
    expect(multiply(5, -1.234)).toBe(-6.17);
    expect(multiply(-5, -1.234)).toBe(6.17);
    expect(multiply(1.234, 0)).toBe(0);
    expect(multiply(1.234, 0)).toBe(multiply(5.678, 0));

    /** Testing comutativity with one integer and one double */
    expect(multiply(1.234, 1)).toBe(multiply(1, 1.234));
    expect(multiply(5, 1.234)).toBe(multiply(1.234, 5));
    expect(multiply(-5, 1.234)).toBe(multiply(1.234, -5));
    expect(multiply(-5, -1.234)).toBe(multiply(-1.234, -5));
    

    /** Testing basic funtionality with two doubles */
    expect(multiply(1.234, 2.345)).toBe(2.89373);
    expect(multiply(1.234, 1.234)).toBe(1.522756);
    expect(multiply(1.234, -2.345)).toBe(-2.89373);
    expect(multiply(-1.234, -2.345)).toBe(2.89373);
    expect(multiply(1.234, 0)).toBe(0);
    expect(multiply(1.234, 0)).toBe(multiply(2.345, 0));

    /** Testing comutativity with two doubles */
    expect(multiply(1.234, 2.345)).toBe(multiply(2.345, 1.234));
    expect(multiply(1.234, -2.345)).toBe(multiply(-2.345, 1.234));
    expect(multiply(-1.234, -2.345)).toBe(multiply(-2.345, -1.234));
});


/**
 *  Function tests functionality with different combinations of expected data types of parameters.
 *  Function also tests correct function of exceptions.
 *  @function divide_test
 */
test('divide_test', () => {
    /** Testing functionality with two integers */
    expect(divide(6, 2)).toBe(3);
    expect(divide(6, 5)).toBe(1.2);
    expect(divide(6, 6)).toBe(1);
    expect(divide(6, 6)).toBe(divide(66, 66));
    expect(divide(-6, 2)).toBe(-3);
    expect(divide(-6, 5)).toBe(-1.2);
    expect(divide(6, -2)).toBe(-3);
    expect(divide(6, -5)).toBe(-1.2);
    expect(divide(-6, -2)).toBe(3);
    expect(divide(-6, -5)).toBe(1.2);


    /** Testing functionality with one integer and one double */
    expect(divide(1.234, 2)).toBe(0.617);
    expect(divide(1.234, -2)).toBe(-0.617);
    expect(divide(-1.234, 2)).toBe(-0.617);
    expect(divide(-1.234, -2)).toBe(0.617);


    /** Testing functionality with two doubles */
    expect(divide(1.234, 2.345)).toBe(0.526226012793177); // failing - eps
    expect(divide(1.234, 1.234)).toBe(1);
    expect(divide(1.234, 1.234)).toBe(divide(11.223344, 11.223344));
    expect(divide(-1.234, 2.345)).toBe(-0.526226012793177); // failing - eps
    expect(divide(1.234, -2.345)).toBe(-0.526226012793177); // failing - eps
    expect(divide(-1.234, -2.345)).toBe(0.526226012793177); // failing - eps


    /** Testing exception - divided by zero */
    expect(() => divide(6, 0)).toThrow(); // not throwing exception
    expect(() => divide(1.234, 0)).toThrow(); // not throwing exception
});


/**
 *  Function tests functionality with expected data type of parameter.
 *  Function also tests correct function of exceptions.
 *  @function factorial_test
 */
test('factorial_test', () => {
    /** Testing functionality */
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    
    /** Testing exception - less than zero */
    expect(() => factorial(-1)).toThrow(); // not throwing exception
});


/**
 *  Function tests functionality with different combinations of expected data types of parameters.
 *  Function also tests correct function of exceptions.
 *  @function toPower_test
 */
test('toPower_test', () => {
    /** Testing functionality with integer */
    expect(toPower(5, 1)).toBe(5); // failing
    expect(toPower(5, 2)).toBe(25); // failing
    expect(toPower(5, 3)).toBe(125); // failing
    expect(toPower(-5, 1)).toBe(-5); // failing
    expect(toPower(-5, 2)).toBe(25);
    expect(toPower(-5, 3)).toBe(-125);
    expect(toPower(1, 2)).toBe(toPower(1, 22));


    /** Testing functionality with double */
    expect(toPower(1.234, 1)).toBe(1.234);
    expect(toPower(1.234, 2)).toBe(1.522756); // failing eps
    expect(toPower(1.234, 3)).toBe(1.879080904);
    expect(toPower(-1.234, 1)).toBe(-1.234);
    expect(toPower(-1.234, 2)).toBe(1.522756);
    expect(toPower(-1.234, 3)).toBe(-1.879080904);
    

    /** Testing exception - zero and less */
    expect(() => toPower(5, 0)).toThrow(); // not throwing exception
    expect(() => toPower(5, -1)).toThrow(); // not throwing exception
});


/**
 *  Function tests basic and extended functionality with different combinations of expected data types of parameters.
 *  Function also tests correct function of exceptions.
 *  @function squareRoot_test
 */
test('squareRoot_test', () => {
    /** Testing basic functionality with integer */
    expect(squareRoot(0, 2)).toBe(0);
    expect(squareRoot(1, 2)).toBe(1);
    expect(squareRoot(4, 2)).toBe(2);
    expect(squareRoot(5, 2)).toBe(2.23606797749979);
    

    /** Testing basic functionality with double */
    expect(squareRoot(0.555)).toBe(0.744983221287567);
    expect(squareRoot(1.234, 2)).toBe(1.1108555261599053);


    /** Testing extended functionality with integer */
    expect(squareRoot(1, 3)).toBe(1);
    expect(squareRoot(8, 3)).toBe(2); // failing
    expect(squareRoot(2, 3)).toBe(1.25992105);


    /** Testing extended functionality with double */
    expect(squareRoot(1.234, 3)).toBe(1.07260147);

    /** Testing exception - less than zero */
    expect(() => squareRoot(-1, 2)).toThrow();
    expect(() => squareRoot(2, -1)).toThrow();
});


/**
 *  Function tests functionality with different combinations of expected data types of parameter.
 *  @function abs_test
 */
test('abs_test', () => {
    /** Testing functionality with integer */
    expect(abs(4)).toBe(4);
    expect(abs(-4)).toBe(4);
    expect(abs(-44)).toBe(abs(44));
    expect(abs(0)).toBe(0);


    /** Testing functionality with double */
    expect(abs(1.234)).toBe(1.234);
    expect(abs(-1.234)).toBe(1.234);
    expect(abs(-11.223344)).toBe(abs(11.223344));
});


/**
 *  Function tests functionality with different combinations of expected data types of parameter.
 *  @function logarithm_test
 */
test('logarithm_test', () => {
    /** Testing functionality with integer */
    expect(logarithm(1)).toBe(0);
    expect(logarithm(2)).toBe(0.6931471805599453);
    expect(logarithm(22)).toBe(3.091042453358316);


    /** Testing functionality with double */
    expect(logarithm(0.555)).toBe(-0.5887871652357024);
    expect(logarithm(1.234)).toBe(0.21026092548319605);
    expect(logarithm(11.223344)).toBe(2.4179958949053724);

    /** Testing exception - zero and less */
    expect(() => logarithm(0)).toThrow(); // not throwing exception
    expect(() => logarithm(-0.555)).toThrow(); // not throwing exception
});
