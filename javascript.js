let numberOne = "";
let operator = "plus";
let numberTwo = 0;

const calculatorTop = document.querySelector(".calculatorTop")
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
const p = document.createElement("p")
calculatorTop.appendChild(p)

zero.addEventListener("click", (e)=> {
    numberOne += "0"
    p.textContent = numberOne;
})

one.addEventListener("click", (e)=> {
    numberOne += "1";
    p.textContent = numberOne;
})

two.addEventListener("click", (e)=> {
    numberOne += "2"
    p.textContent = numberOne;
})

three.addEventListener("click", (e)=> {
    numberOne += "3"
    p.textContent = numberOne;
})

four.addEventListener("click", (e)=> {
    numberOne += "4"
    p.textContent = numberOne;
})

five.addEventListener("click", (e)=> {
    numberOne += "5"
    p.textContent = numberOne;
})

six.addEventListener("click", (e)=> {
    numberOne += "6"
    p.textContent = numberOne;
})

seven.addEventListener("click", (e)=> {
    numberOne += "7"
    p.textContent = numberOne;
})

eight.addEventListener("click", (e)=> {
    numberOne += "8"
    p.textContent = numberOne;
})

nine.addEventListener("click", (e)=> {
    numberOne += "9"
    p.textContent = numberOne;
})



































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



























