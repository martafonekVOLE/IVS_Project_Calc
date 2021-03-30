



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
/*Backspace function*/
function backspace(){
    var backspace = document.getElementById('inputField').innerHTML;
    var backspace = backspace.slice(0, -1);
    document.getElementById('inputField').innerHTML = (backspace);
}
/*** Erases All the fields ***/
function eraseAll(){
    document.getElementById('inputField').innerHTML = '';
    document.getElementById('intermediate').innerHTML = '';
}
/***Object***/
var NumbersAndOperation = {};
NumbersAndOperation.calculated=2;
/***Identifies Operator and printf onto intermediate Display*/
function operation(operator){
    NumbersAndOperation.operator = operator;
    var test = parseFloat(document.getElementById('inputField').innerHTML);     //parse
    if(isNaN(test)){
        if(NumbersAndOperation.calculated==2){
            if((parseFloat(NumbersAndOperation.firstNumber))>0){ 
            }
            else{
            NumbersAndOperation.firstNumber=0;
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
        document.getElementById('intermediate').innerHTML ='√' + document.getElementById('intermediate').innerHTML;
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
/*RESULT OF EPERATION*/
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
        /*Sčítání*/
        resultOfOperation = addUp(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==2){
        /*Odčítání*/
        resultOfOperation = subtract(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==3){
        /*Násobení*/
        resultOfOperation = multiply(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==4){
        /*Dělení*/
        resultOfOperation = divide(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==5){           //DOES NOT WORK 
        resultOfOperation = toPower(firstNumber, secondNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
    }
    else if(NumbersAndOperation.operator==6){
        resultOfOperation = squareRoot(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==7){
        resultOfOperation = logarithm(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==8){
        resultOfOperation = abs(firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }
    else if(NumbersAndOperation.operator==9){
        resultOfOperation = factorial(Math.round(firstNumber));
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
    }

}
/*PREVIOUS RESULT*/
function getAns(){
    NumbersAndOperation.calculated = 1;
    document.getElementById('inputField').innerHTML = NumbersAndOperation.Ans;
    if(NumbersAndOperation.operator == 1){
    document.getElementById('intermediate').innerHTML = NumbersAndOperation.Ans;
    NumbersAndOperation.firstNumber=NumbersAndOperation.Ans;
    }
}
/*CONVERT +-*/
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
/*KEYBOARD INPUT LISTENER*/
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
        //Function 1
    }
    else if(event.keyCode == 113){
        //Function 2
    }
    else if(event.keyCode == 114){
        //Function 3
    }
    else if(event.keyCode == 115){
        //Function 4
    }
    else if(event.keyCode == 116){
        //Function 5
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