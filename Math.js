/** 
*  @author : Krištof Šiška
*  @licence : GNU General Public License v3
*/

/** JS MATH LIBRARY FOR IVS */

/** 
 *  @function Adds up 2 numbers 
 *  @param {double} 1st number
 *  @param {double} 2nd number
 *  @return Returns sum of the 2 numbers 
*/
function addUp(a , b) {
    return a + b;
}

/**
 *  @function Subtracts 2nd number from the 1st
 *  @param {double} Number to be subtracted from
 *  @param {double} Number to be subtracted
 *  @return Returns difference between num 1 and num 2 
*/
function subtract(a , b) {
    return a - b;
}

/** 
 *  @function Multiplies the 2 numbres
 *  @param {double} 1st number 
 *  @param {double} 2nd number
 *  @return Returns the multiplication value of the 2 numbers 
*/
function multiply(a , b){
    return a * b;
}

/** 
 * @function Divides 2 numbers
 * @param {double} divident
 * @param {double} divisor
 * @return Returns Quotient of the 2 numbers 
*/
function divide(a , b){
    if (b == 0){
       throw "Division by 0 is undefined"
    }
    return a/b;
}

/** 
 * @function Product of all integers <= a 
 * @param {int} Highest integer
 * @return Returns the factorial of a number 
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
 *  @function Repeated multiplication of a base to the power of exponent 
 *  @param {double} Base
 *  @param {double} Exponent
 *  @return Returns the 1st num raised to the power of the 2nd num 
*/
function toPower(a , b){
    return Math.toPower(a , b);
}

/** 
 *  @function Function to return the square root of a number
 *  @param {double}
 *  @return {double} Returns  the square root of a given number  
 */
function squareRoot(a){
    if (a < 0){
        throw "Square root of numbers < 0 doesnt exists"
    }
    return Math.sqrt(a);
}

/** 
 *  @function Function to return logarithm to the base of 10
 *  @param {double}
 *  @return {double} Returns the logarithm to the base of 10 of a given number 
*/
function logarithm(a){
    if (a < 0){
        throw "logarithm of numbers < 0 doesnt exists"
    }
    return Math.log(a);
}

/** 
 *  @function Function to return absolute value of a number
 *  @param {double}
 *  @return {double} Returns the absolute value of a number 
*/
function abs(a){
    return Math.abs(a);
}

/* End of JS MATH LIBRARY */

