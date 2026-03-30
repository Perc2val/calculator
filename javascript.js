let numberOne;
let numberTwo;
let operator;


function add(numberOne, numberTwo){
    return numberOne + numberTwo;
};

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
};

function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
};

function divide(numberOne, numberTwo){
    return numberOne/numberTwo;
};

function operate(numberOne, numberTwo, operator){
    if(operator == "plus"){
        return add(numberOne, numberTwo);
    } else if (operator == "minus"){
        return subtract(numberOne, numberTwo);
    } else if (operator == "multi"){
        return multiply(numberOne, numberTwo);
    } else if (operator == "divi") {
        return divide(numberOne, numberTwo);
    };
};