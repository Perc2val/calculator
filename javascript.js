let numberOne = "";
let operator = "";
let numberTwo = "";
let partResult = "";

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
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multiply");
const divi = document.querySelector(".divide");
const eqaul = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const p = document.createElement("p")
calculatorTop.appendChild(p)

clear.addEventListener("click", (e)=>{
    numberOne = "";
    operator = "";
    numberTwo = "";
    p.textContent = "";
})






zero.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "0"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "0";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

one.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "1"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "1";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

two.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "2"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "2";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

three.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "3"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "3";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

four.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "4"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "4";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

five.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "5"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "5";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

six.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "6"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "6";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

seven.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "7"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "7";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

eight.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "8"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "8";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
})

nine.addEventListener("click", (e)=> {
    if (numberOne == partResult) {
        numberOne = "";
        numberTwo = "";
        partResult = "";
        operator = "";
        p.textContent = "";
    }
        if (operator == ""){
            numberOne += "9"
            p.textContent = numberOne;
            console.log("hun" + numberOne)
        } else {
            numberTwo += "9";
            p.textContent = numberTwo;
            console.log("num" + numberTwo)
    }
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





/* equal sign operation*/

eqaul.addEventListener("click", (e)=> {
    operate(+numberOne, +numberTwo, operator)
    p.textContent = partResult;
    numberOne = partResult;
    numberTwo = "";
    operator = "";
    console.log(partResult)
})
/* if there is a second operator clicked just equal the first and then add the second operator*/
plus.addEventListener("click", (e)=> {
    if (operator == "plus"){ 
        operate(+numberOne, +numberTwo, operator)
        p.textContent = partResult;
        numberOne = partResult;
        numberTwo = "";
        operator = "";
        console.log(partResult)
        operator = "plus";
        partResult = "";
    } else {
        operator = "plus";
    }
})

minus.addEventListener("click", (e)=> {
    if (operator == "minus"){ 
        operate(+numberOne, +numberTwo, operator)
        p.textContent = partResult;
        numberOne = partResult;
        numberTwo = "";
        operator = "";
        console.log(partResult)
        operator = "minus";
        partResult = "";
    } else {
        operator = "minus";
    }
});

multi.addEventListener("click", (e)=> {
    if (operator == "multiply"){ 
        operate(+numberOne, +numberTwo, operator)
        p.textContent = partResult;
        numberOne = partResult;
        numberTwo = "";
        operator = "";
        console.log(partResult)
        operator = "multiply";
        partResult = "";
    } else {
        operator = "multiply";
    }
})

divi.addEventListener("click", (e)=> {
   if (operator == "divide"){ 
        operate(+numberOne, +numberTwo, operator)
        p.textContent = partResult;
        numberOne = partResult;
        numberTwo = "";
        operator = "";
        console.log(partResult)
        operator = "divide";
        partResult = "";
    } else {
        operator = "divide";
    }
})













