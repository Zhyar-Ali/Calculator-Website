function add (num1,num2){
    return Number.isInteger(num1+num2)? (num1+num2) : (num1 + num2).toFixed(2);
}

function subtract (num1, num2){
    return Number.isInteger(num1-num2)? (num1-num2) : (num1 - num2).toFixed(2);
}

function multiply (num1, num2){
    return Number.isInteger(num1*num2)? (num1*num2) : (num1 * num2).toFixed(2);
}

function divide (num1, num2){
    return Number.isInteger(num1/num2)? (num1/num2) : (num1 / num2).toFixed(2);
}

function operate(operator, num1, num2){
    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

const digitButtons = document.querySelectorAll(".digits button");
const operators = document.querySelectorAll(".operators button");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const screen = document.querySelector(".text");

let num1="";
let num2="";
let operator ="";
let result = "";

function display(){

    digitButtons.forEach(button => {
        button.addEventListener ("click", () => {
            const getDigit = button.innerText;

            if (!operator && !result){
                num1 += getDigit;
                screen.innerText = num1;
            }else if(!operator && result){
                num1 ="";
                num1 += getDigit;
                screen.innerText = num1;
            }else{
                num2 += getDigit;
                screen.innerText = num2;
            }

        })
    })

    operators.forEach(button => {
        button.addEventListener("click", () => {
            const getOperator = button.innerText;
            decimal.disabled = false;

            if (operator){
                result = operate(operator, Number(num1), Number(num2));
                num1 = result;
                num2 = "";
                screen.innerText = "";
                screen.innerText = num1;
            }
            operator = getOperator;
        })
    })

    equal.addEventListener("click", () => {
        result = operate(operator, Number(num1), Number(num2));
        num1 = result;
        num2 = "";
        operator = "";
        screen.innerText = result;
    })
    
    clear.addEventListener("click", () => {
        num1="";
        num2="";
        operator ="";
        result = "";
        screen.innerText = "";
    })

    decimal.addEventListener("click", () => {
        if (!operator){
            num1 += decimal.innerText;
            screen.innerText = num1;
            decimal.disabled = true;
        }else{
            num2 += decimal.innerText;
            screen.innerText = num2;
            decimal.disabled = true;
        }
    })

}

display();