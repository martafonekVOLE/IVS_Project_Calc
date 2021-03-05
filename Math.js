

/* JS MATH LIBRARY FOR IVS */

/* @ Adds up 2 numbers 
   @param {double} 1st number
   @param {double} 2nd number
   @return Returns sum of the 2 numbers 
*/
function addUp(a , b) {
    return a + b;
}

/* @Brief Subtracts 2nd number from the 1st
   @param {double} Number to be subtracted from
   @param {double} Number to be subtracted
   @return Returns difference between num 1 and num 2 
*/
function subtract(a , b) {
    return a - b;
}

/* @brief Multiplies the 2 numbres
   @param {double} 1st number 
   @param {double} 2nd number
   @return Returns the multiplication value of the 2 numbers 
*/
function multiply(a , b){
    return a * b;
}

/* @brief Divides 2 numbers
   @param {double} divident
   @param {double} divisor
   @return Returns Quotient of the 2 numbers 
*/
function divide(a , b){
    if (b == 0){
        throw{
            //TODO 
        }
    }
    return a/b;
}

/* @brief Product of all integers <= a 
   @param {int} Highest integer
   @return Returns the factorial of a number 
*/
function factorial(a){
    if (a < 0){
        throw {
            // TODO
        }
    }
    let i = 2;
    let res = 1;
    for (i = 2; i <= a; i++){
        res *= i;
    }
    return res;
}
/* @brief Repeated multiplication of a base to the power of exponent 
   @param {double} Base
   @param {double} Exponent
   @return Returns the 1st num raised to the power of the 2nd num 
*/
function toPower(a,b){
    return a^b;
}

