/** 
*  @author : Krištof Šiška
*  @licence : GNU General Public License v3
*/

/** JS MATH LIBRARY FOR IVS */

/* INPUTHANDLER START */
/*** Inserts Number into inputField ***/
function insertNumber(number){
    if(NumbersAndOperation.calculated == 1){
        eraseAll();
        NumbersAndOperation.calculated = 0;
    }
    else{
    }
    document.getElementById('inputField').innerHTML = document.getElementById('inputField').innerHTML + number;
}
/*** Erases All the fields ***/
function eraseAll(){
    document.getElementById('inputField').innerHTML = '';
    document.getElementById('intermediate').innerHTML = '';
}
/***Object***/
var NumbersAndOperation = {};
/***Identifies Operator and printf onto intermediate Display*/
function operation(operator){
    NumbersAndOperation.operator = operator;
    var test = document.getElementById('inputField').innerHTML;
    var firstNumber;
    if(test==""){
        alert('NULL');
    }
    else{
        NumbersAndOperation.firstNumber = parseFloat(document.getElementById('inputField').innerHTML);
    
    document.getElementById('intermediate').innerHTML = document.getElementById('inputField').innerHTML; 
    document.getElementById('inputField').innerHTML = '';
    }
    if(operator==1){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '+';
    }
    else if(operator==2){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '-';
    }
    else if(operator==3){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '*';
    }
    else if(operator==4){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '/';
    }
    else if(operator==6){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '^';
    }
    else if(operator == 7){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '√';
    }
}
/***Getting result***/
function result(){
    var firstNumber = NumbersAndOperation.firstNumber;
    var secondNumber = parseFloat(document.getElementById('inputField').innerHTML);
    
    document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + secondNumber;
    if(NumbersAndOperation.operator==1){
        /*Sčítání*/
        var resultOfOperation = addUp(firstNumber,secondNumber);
        gettingHelp(resultOfOperation);
    } 
    if(NumbersAndOperation.operator==2){
        /* Odcitanie */
        var resultOfOperation = subtract(firstNumber, secondNumber);
        gettingHelp(resultOfOperation);
    }
    if(NumbersAndOperation.operator==3){
        /* Nasobenie */
        var resultOfOperation = multiply(firstNumber, secondNumber);
        gettingHelp(resultOfOperation);
    }
    if(NumbersAndOperation.operator==4){
        /*Dělení*/
        var resultOfOperation = divide(firstNumber, secondNumber);
        gettingHelp(resultOfOperation);
    }
    if (NumbersAndOperation.operator==6){
        /* ToPower */
        var resultOfOperation = toPower(firstNumber, secondNumber);
        gettingHelp(resultOfOperation);
    }
    if(NumbersAndOperation.operator==7){
        var resultOfOperation = squareRoot(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        
    }
}
function getAns(){
    NumbersAndOperation.calculated = 1;
    document.getElementById('inputField').innerHTML = NumbersAndOperation.Ans;
    if(NumbersAndOperation.operator == 1){
    document.getElementById('intermediate').innerHTML = NumbersAndOperation.Ans1 + "+" +NumbersAndOperation.Ans2+ "=" + NumbersAndOperation.Ans;
    }
}
document.addEventListener('keydown', function(event) {
if (event.keyCode == 48 || event.keyCode == 96) {
    insertNumber(0);
}
else if (event.keyCode == 49 || event.keyCode == 97) {
    insertNumber(1);
}
else if (event.keyCode == 50 || event.keyCode == 98) {
    insertNumber(2);
}
else if (event.keyCode == 51 || event.keyCode == 99) {
    insertNumber(3);
}
else if (event.keyCode == 52 || event.keyCode == 100) {
    insertNumber(4);
}
else if (event.keyCode == 53 || event.keyCode == 101) {
    insertNumber(5);
}
else if (event.keyCode == 54 || event.keyCode == 102) {
    insertNumber(6);
}
else if (event.keyCode == 55 || event.keyCode == 103) {
    insertNumber(7);
}
else if (event.keyCode == 56 || event.keyCode == 104) {
    insertNumber(8);
}
else if (event.keyCode == 57 || event.keyCode == 105) {
    insertNumber(9);
}
else if(event.keyCode == 107){
    operation(1);
}
else if(event.keyCode == 109){
    operation(2);
}
else if(event.keyCode == 106){
    operation(3);
}
else if(event.keyCode == 111){
    operation(4);
}
else if(event.keyCode == 13 || event.keyCode == 187 || event.keyCode == 191){
    result();
}
else if(event.keyCode == 67 || event.keyCode == 27 || event.keyCode == 46){
    eraseAll();
}
else if(event.keyCode == 112){
    /* ToPower */
    operation(6);
    //Function 1
}
else if(event.keyCode == 113){
    /* SquareRoot */
    operation(7);
    //Function 2
}
else if(event.keyCode == 114){
    /* Logarithm */
    var resultOfOperation = logarithm(firstNumber);
    gettingHelp(resultOfOperation);
    //Function 3
}
else if(event.keyCode == 115){
    /* AbsoluteValue */
    var resultOfOperation = abs(firstNumber);
    gettingHelp(resultOfOperation);
    //Function 4
}
else if(event.keyCode == 116){
    /* Factorial */
    var resultOfOperation = factorial(firstNumber);
    gettingHelp(resultOfOperation);
    //Function 5
}
else{
    
}

}, true);
/* INPUTHANDLER END */


function gettingHelp(resultOfOperation){
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
}

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

function profiling(/* File */){
    var deviation = 0;
    var numCount = 0;
    var sum = 0;
}

/* End of JS MATH LIBRARY */

