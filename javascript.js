let numberOne = "";
let numberTwo = "";
let operator = "";
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
const p = document.createElement("p");





zero.addEventListener("click", ()=>{
    numberOne += 0;
    updateDisplay();
});
one.addEventListener("click", ()=>{
    numberOne += 1;
    updateDisplay();
});
two.addEventListener("click", ()=>{
    numberOne += 2;
    updateDisplay();
});
three.addEventListener("click", ()=>{
    numberOne += 3;
    updateDisplay();
});
four.addEventListener("click", ()=>{
    numberOne += 4;
    updateDisplay();
});
five.addEventListener("click", ()=>{
    numberOne += 5;
    updateDisplay();
});
six.addEventListener("click", ()=>{
    numberOne += 6;
    updateDisplay();
});
seven.addEventListener("click", ()=>{
    numberOne += 7;
    updateDisplay();
});
eight.addEventListener("click", ()=>{
    numberOne += 8;
    updateDisplay();
});
nine.addEventListener("click", ()=>{
    numberOne += 9;
    updateDisplay();
});

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

function updateDisplay(){
    display.appendChild(p);
    p.classList.add("displayNumber")
    p.textContent = numberOne;
};

function clearDisplay(){
    numberOne = "";
    numberTwo = "";
    operator = "";
    p.remove();
};