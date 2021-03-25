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
/***Identifies Operator and printf onto intermediate Display*/
function operation(operator){
    NumbersAndOperation.operator = operator;
    var test = document.getElementById('inputField').innerHTML;
    var firstNumber;
    if(test==""){
        alert('NULL');
    }
    else{
        NumbersAndOperation.firstNumber = document.getElementById('inputField').innerHTML;

    document.getElementById('intermediate').innerHTML = document.getElementById('inputField').innerHTML;
    document.getElementById('inputField').innerHTML = '';
    }
    if(operator==1){
        document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + '+';
    }

}
/*RESULT OF EPERATION*/
function result(){
    var firstNumber = NumbersAndOperation.firstNumber;
    var secondNumber = document.getElementById('inputField').innerHTML;;
    document.getElementById('intermediate').innerHTML = document.getElementById('intermediate').innerHTML + secondNumber;
    if(NumbersAndOperation.operator==1){
        /*Sčítání*/
        var resultOfOperation = (+secondNumber + +firstNumber);
        document.getElementById('inputField').innerHTML = resultOfOperation;
        NumbersAndOperation.calculated = 1;
        NumbersAndOperation.Ans = resultOfOperation;
        NumbersAndOperation.Ans1 = firstNumber;
        NumbersAndOperation.Ans2 = secondNumber;
        /*
        If you make operation with converted number, such as "-21+3" you get the right result, but without "-" symbol. Fix with conditions?
        */
    }
    if(NumbersAndOperation.operator==2){
        /*Odčítání*/
    }
    if(NumbersAndOperation.operator==3){
        /*Násobení*/
    }
    if(NumbersAndOperation.operator==4){
        /*Dělení*/
    }
}
/*PREVIOUS RESULT*/
function getAns(){
    NumbersAndOperation.calculated = 1;
    document.getElementById('inputField').innerHTML = NumbersAndOperation.Ans;
    if(NumbersAndOperation.operator == 1){
    document.getElementById('intermediate').innerHTML = NumbersAndOperation.Ans1 + "+" +NumbersAndOperation.Ans2+ "=" + NumbersAndOperation.Ans;
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
    else if(event.keyCode == 8){
        backspace();
    }
    else{
        
    }

}, true);