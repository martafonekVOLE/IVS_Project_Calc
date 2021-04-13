/** 
*  @file Math library for IVS Calc
*  @author Krištof Šiška
*  @licence GNU General Public License v3
*/

/** JS MATH LIBRARY FOR IVS */

/** 
 *  @function addUp Adds up up 2 numbers 
 *  @param {double} a 1st number
 *  @param {double} b 2nd number
 *  @return {dobule} Returns sum of the 2 numbers 
*/
function addUp(a , b) {
    return a + b;
}

/**
 *  @function subtract Subtracts 2nd number from the 1st
 *  @param {double} a Number to be subtracted from
 *  @param {double} b Number to be subtracted
 *  @return {double} Returns difference between num 1 and num 2 
*/
function subtract(a , b) {
    return a - b;
}

/** 
 *  @function multiply Multiplies the 2 numbres
 *  @param {double} a 1st number 
 *  @param {double} b 2nd number
 *  @return {double} Returns the multiplication value of the 2 numbers 
*/
function multiply(a , b){
    return a * b;
}

/** 
 * @function divide Divides 2 numbers
 * @param {double} a divident
 * @param {double} b divisor
 * @return {double} Returns Quotient of the 2 numbers 
*/
function divide(a , b){
    if (b == 0){
       throw "Division by 0 is undefined"
    }
    
    return a/b;
}

/** 
 * @function factorial Product of all integers <= a 
 * @param {int} a Highest integer
 * @return {int} Returns the factorial of a number 
*/
function factorial(a){
    if (a < 0){
        throw "Factorial must be natural integer"
    }
    
    if (a % 1 != 0){
        throw "Factorial must be decimal number"
    }
 
    let i = 2;
    let res = 1;
    for (i = 2; i <= a; i++){
        res *= i;
    }
    
    return res;
}

/** 
 *  @function toPower Repeated multiplication of a base to the power of exponent 
 *  @param {double} a Base
 *  @param {double} b Exponent
 *  @return {double} Returns the 1st num raised to the power of the 2nd num 
*/
function toPower(a , b){
    return Math.pow(a , b);
}

/** 
 *  @function squareRoot Function to return the square root of a number
 *  @param {double} a Number to get square root from
 *  @return {double} Returns  the square root of a given number  
 */
function squareRoot(a){
    if (a < 0){
        throw "Square root of numbers < 0 doesnt exists"
    }
    
    return Math.sqrt(a);
}

/** 
 *  @function logarithm Function to return logarithm to the base of 10
 *  @param {double} a Number to get logarithm from
 *  @return {double} Returns the logarithm to the base of 10 of a given number 
*/
function logarithm(a){
    if (a < 0){
        throw "logarithm of numbers < 0 doesnt exists"
    }
    
    return Math.log(a);
}

/** 
 *  @function abs Function to return absolute value of a number
 *  @param {double} a Number to get absolute value from
 *  @return {double} Returns the absolute value of a number 
*/
function abs(a){
    return Math.abs(a);
}

/**
 * @function nthSquareRoot Calculates the nth square root of number
 * @param {int} a Nth square root
 * @param {double} b Number to be Nth square rooted
 * */ 

function nthSquareRoot(a,b){
    if (a == 0){
        throw "Cannot do 0th square root of number"
    }
    /* b is negative and a is odd */
    if ((b < 0) && (a % 2) == 0 ){
        throw "Even nth square root of negative number doesnt exist"
    }
    Math.pow(b, 1/a);
}

/** Function export for testing */ 
module.exports = {
    addUp,
    subtract,
    multiply,
    divide,
    factorial,
    toPower,
    squareRoot,
    logarithm,
    abs,
    nthSquareRoot
}
/* End of JS MATH LIBRARY */

