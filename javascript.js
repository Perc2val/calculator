let numberOne = 0;
let operator = "plus";
let numberTwo = 0;

function add(numberOne, numberTwo) {
    partResult = numberOne + numberTwo;
    return partResult;
}

function subtract(numberOne, numberTwo) {
    partResult = numberOne - numberTwo;
    return partResult;
}

function multiply(numberOne, numberTwo) {
    partResult = numberOne * numberTwo;
    return partResult;
}

function divide(numberOne, numberTwo) {
    partResult = numberOne/numberTwo;
    return partResult;
}



function operate(numberOne, numberTwo, operator) {
    if (operator == "plus") {
        add(numberOne, numberTwo);
    } else if (operator == "minus") {
        subtract(numberOne, numberTwo)
    } else if (operator == "multiply") {
        multiply(numberOne, numberTwo)
    } else if (operator == "divide") {
        divide(numberOne, numberTwo)
    }
    return partResult;
}



























