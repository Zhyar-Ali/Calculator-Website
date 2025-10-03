function add (num1,num2){
    return num1 +num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return (num1 / num2).toFixed(2);
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
const clear = document.querySelector("#clear")
const screen = document.querySelector(".text");

let num1="";
let num2="";
let operator ="";
let result = "";
let isOperatorClicked = false;

function display(){

    digitButtons.forEach(button => {
        button.addEventListener ("click", () => {
            const getDigit = button.innerText;

            if (!isOperatorClicked && !result){
                num1 += getDigit;
                screen.innerText = num1;
            }else if(!isOperatorClicked && result){
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
            isOperatorClicked = true;

            if (operator){
                result = operate(operator, Number(num1), Number(num2));
                num1 = result;
                num2 = "";
                operator = getOperator;
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
        isOperatorClicked = false;
        screen.innerText = result;
    })
    
    clear.addEventListener("click", () => {
        num1="";
        num2="";
        operator ="";
        result = "";
        isOperatorClicked = false;
        screen.innerText = "";
    })

}

display();