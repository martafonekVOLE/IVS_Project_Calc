/**
 * @function insertNumber - Inserts given integer to inputField
 * @param {int} number 
 */
 function insertNumber(number){
    if(NumbersAndOperation.calculated == 1){
        eraseAll();
        NumbersAndOperation.calculated = 0;
    }
    else{
    }
    document.getElementById('inputField').innerHTML = document.getElementById('inputField').innerHTML + number;
}

/**
 * @function backspace - Erases the latest character in input field
 */
function backspace(){
    var backspace = document.getElementById('inputField').innerHTML;
    var backspace = backspace.slice(0, -1);
    document.getElementById('inputField').innerHTML = (backspace);
}

/**
 * @function eraseAll - Erases all the calculator fields
 */
function eraseAll(){
    document.getElementById('inputField').innerHTML = '';
    document.getElementById('intermediate').innerHTML = '';
}

/**
 * @type {object} NumbersAndOperation
 */
var NumbersAndOperation = {};

NumbersAndOperation.calculated=2;

/**
 * @function operation - Executes operation of given operator
 * @param {char} operator - Identifier of operation
 */
function operation(operator){
    NumbersAndOperation.operator = operator;
    var test = parseFloat(document.getElementById('inputField').innerHTML);     //parse
    if(isNaN(test)){
        if(NumbersAndOperation.calculated==2){
            if((parseFloat(NumbersAndOperation.firstNumber))>0){ 
            }
            else{
                if(operator==6){
                    NumbersAndOperation.firstNumber=2;
                }
                else{
                NumbersAndOperation.firstNumber=0;
                }   
            }
        }
        document.getElementById('intermediate').innerHTML = NumbersAndOperation.firstNumber;
        document.getElementById('inputField').innerHTML = '';
    }
    else{
    NumbersAndOperation.firstNumber = parseFloat(document.getElementById('inputField').innerHTML);
    
    document.getElementById('intermediate').innerHTML = NumbersAndOperation.firstNumber;
    document.getElementById('inputField').innerHTML = '';
    }
    /* Printing of given operator */
    if(operator==1){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '+';
    }
    else if (operator==2){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '-';
    }
    else if (operator==3){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '*';
    }
    else if (operator==4){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '÷';
    }
    else if (operator==5){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '^';
    }
    else if (operator==6){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '√';
    }
    else if (operator==7){
        document.getElementById('intermediate').innerHTML ='log' + document.getElementById('intermediate').innerHTML;
    }
    else if (operator==8){
        document.getElementById('intermediate').innerHTML ='|' + document.getElementById('intermediate').innerHTML + "|";
    }
    else if (operator==9){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + "!";
    }

}

/**
 * @function result - Gets the result of given operation
 */
function result(){
    var firstNumber = NumbersAndOperation.firstNumber;
    var secondNumber = parseFloat(document.getElementById('inputField').innerHTML);
    if(isNaN(secondNumber)){
        if(isNaN(NumbersAndOperation.Ans2)){
            secondNumber=0;
        }
        else{
        secondNumber=NumbersAndOperation.Ans2;
        }
    }
    if(NumbersAndOperation.operator<6){
    document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + secondNumber;
    }

    if(NumbersAndOperation.operator==1){
        /* Addition */
        resultOfOperation = addUp(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==2){
        /*Subtraction*/
        resultOfOperation = subtract(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==3){
        /* Multiplication */
        resultOfOperation = multiply(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==4){
        /* Division */
        resultOfOperation = divide(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==5){         
        /* To power */
        resultOfOperation = toPower(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==6){
        /* Square root */
        if(secondNumber==0){
            resultOfOperation = squareRoot(firstNumber);
        }
        else{
            resultOfOperation = nthSquareRoot(firstNumber, secondNumber);
            document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + secondNumber;
        }
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==7){
        /* Logarithm */
        resultOfOperation = logarithm(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==8){
        /* Absolute value */
        resultOfOperation = abs(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==9){
        /* Factorial */
        resultOfOperation = factorial(Math.round(firstNumber));
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }

}

/**
 * @function getAns - Gets the answer from previous calculation
 */
function getAns(){
    NumbersAndOperation.calculated = 1;
    document.getElementById('inputField').innerHTML = NumbersAndOperation.Ans;
    if(NumbersAndOperation.operator == 1){
    document.getElementById('intermediate').innerHTML = NumbersAndOperation.Ans;
    NumbersAndOperation.firstNumber=NumbersAndOperation.Ans;
    }
}

/**
 * @function convert - Negates given value 
 */
function convert(){
    conversion = document.getElementById('inputField').innerHTML;
    /*if(conversion.charAt(0)=="-"){
        conversion = (conversion - conversion.substring(1));
        alert("IF");
    }
    else{
        conversion = "-"+conversion;
        alert("ELSE");
    }*/
    conversion = (conversion * (-1))
    document.getElementById('inputField').innerHTML = conversion;
}
/**
 * Keyboard inputs handler
*/
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
        operation(5);
    }
    else if(event.keyCode == 113){
        operation(6);
    }
    else if(event.keyCode == 114){
        operation(7)
    }
    else if(event.keyCode == 115){
        operation(8)
    }
    else if(event.keyCode == 116){
        operation(9)
    }
    else if(event.keyCode == 188 || event.keyCode == 190){
        insertNumber('.');
    }
    else if(event.keyCode == 8){
        backspace();
    }
    else{
        
    }

}, true);