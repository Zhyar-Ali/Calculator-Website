function add (...numb){
    let total = 0;

    for (const numbers of numb){
        total += numbers;
    }

    return total;
}

function subtract (...numb){
    let total = numb[0];

    for (let i=1; i<numb.length; i++){
        total -= numb[i];
    }

    return total;
}

function multiply (...numb){
    let total = 1;

    for (const numbers of numb){
        total *= numbers;
    }

    return total;
}

function divide (...numb){
    let total = numb[0];

    for (let i=1; i<numb.length; i++){
        total /= numb[i];
    }

    return total;
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
let isOperatorClicked = false;

function display(){
    digitButtons.forEach(button => {
        button.addEventListener ("click", () => {
            const getDigit = button.innerText;

            if (!isOperatorClicked){
                num1 += getDigit;
            }else{
                num2 += getDigit;
            }
            screen.innerText = getDigit;
        })
    })

    operators.forEach(button => {
        button.addEventListener("click", () => {
            const getOperator = button.innerText;
            isOperatorClicked = true;

            if (!operator){
                operator = getOperator;
                // screen.innerText += operator;
            }else{
                let result = operate(operator, Number(num1), Number(num2));
                num1 = result;
                num2 = "";
                operator = getOperator;
                screen.innerText = "";
                screen.innerText += num1 /*+ operator*/;
            }
        })
    })

    equal.addEventListener("click", () => {
        let result = operate(operator, Number(num1), Number(num2));
        num1 = result;
        num2 = "";
        screen.innerText = result;
    })
    
    clear.addEventListener("click", () => {
        num1="";
        num2="";
        operator ="";
        isOperatorClicked = false;
        screen.innerText = "";
    })

}


display();
