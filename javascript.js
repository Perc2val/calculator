let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";
const zero = document.querySelector(".zero")
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const display = document.querySelector(".calcdisplay");
const displayNumber = document.querySelector(".calcdisplaynumber");
const displayOperator = document.querySelector(".calcdisplayoperator")
const p = document.createElement("p");
const pOperator = document.createElement("p");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const equal = document.querySelector(".equal");

equal.addEventListener("click", ()=>{
    if(numberOne != ""&& numberTwo != ""){
        operate(numberOne, numberTwo, operator);
        numberOne = result;
        operator = "";
        numberTwo = "";
        updateDisplay();
        result = "";
    } 
});

divideButton.addEventListener("click", ()=> {
    if (operator == ""){
        operator = "divide";
        updateDisplay();
    } else {
        operate(numberOne, numberTwo, operator);
        numberOne = result;
        operator = "divide";
        numberTwo = "";
        updateDisplay();
    }
});
multiplyButton.addEventListener("click", ()=> {
    if (operator == ""){
        operator = "multiply";
        updateDisplay();
    } else {
        operate(numberOne, numberTwo, operator);
        numberOne = result;
        operator = "multiply";
        numberTwo = "";
        updateDisplay();
    }
});
minusButton.addEventListener("click", ()=> {
    if (operator == ""){
        operator = "minus";
        updateDisplay();
    } else {
        operate(numberOne, numberTwo, operator);
        numberOne = result;
        operator = "minus";
        numberTwo = "";
        updateDisplay();
    }
});
plusButton.addEventListener("click", ()=> {
    updateDisplayOperator();
    if (numberOne != "" && numberTwo != "" && operator != ""){
        operate(numberOne, numberTwo, operator);
        numberOne = result;
        numberTwo = "";
        updateDisplay();
        result = "";
    } else if (operator == ""){
        operator = "plus";
        updateDisplay();
    } else {
       
    }
});


zero.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "0";
        updateDisplay();
    } else {
        numberTwo += "0";
        updateDisplay();
    }
});
one.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "1";
        updateDisplay();
    } else {
        numberTwo += "1";
        updateDisplay();
    }
});
two.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "2";
        updateDisplay();
    } else {
        numberTwo += "2";
        updateDisplay();
    }
});
three.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "3";
        updateDisplay();
    } else {
        numberTwo += "3";
        updateDisplay();
    }
});
four.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "4";
        updateDisplay();
    } else {
        numberTwo += "4";
        updateDisplay();
    }
});
five.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "5";
        updateDisplay();
    } else {
        numberTwo += "5";
        updateDisplay();
    }
});
six.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "6";
        updateDisplay();
    } else {
        numberTwo += "6";
        updateDisplay();
    }
});
seven.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "7";
        updateDisplay();
    } else {
        numberTwo += "7";
        updateDisplay();
    }
});
eight.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "8";
        updateDisplay();
    } else {
        numberTwo += "8";
        updateDisplay();
    }
});
nine.addEventListener("click", ()=>{
    if (operator == ""){
        numberOne += "9";
        updateDisplay();
    } else {
        numberTwo += "9";
        updateDisplay();
    }
});

function add(numberOne, numberTwo){
    return +numberOne + +numberTwo;
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
        result = add(numberOne, numberTwo);
    } else if (operator == "minus"){
        result = subtract(numberOne, numberTwo);
    } else if (operator == "multiply"){
        result = multiply(numberOne, numberTwo);
    } else if (operator == "divide") {
        result = divide(numberOne, numberTwo);
    };
};

function updateDisplay(){
    displayNumber.appendChild(p);
    p.classList.add("calcdisplaynumber");
    p.classList.add("displayNumber");
    if (result == ""){
        if (operator == ""){
            p.textContent = numberOne;
        } else {
            p.textContent = numberTwo;
        }
    } else {
        p.textContent = result;
    }
};

function updateDisplayOperator(){
    displayOperator.appendChild(pOperator);
    pOperator.classList.add("calcdisplayoperator");
    pOperator.classList.add("displayOperator");
    if (operator == ""){
        return
    }
    p.textContent = operator;
}

function clearDisplay(){
    numberOne = "";
    numberTwo = "";
    operator = "";
    p.remove();
};