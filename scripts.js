function add (...numb){
    let total = 0;

    for (const numbers of numb){
        total += numbers;
    }

    return total;
}

function subtract (...numb){
    let total = 0;

    for (const numbers of numb){
        total -= numbers;
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
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
    }
}

const digitButtons = document.querySelectorAll(".digits button");
const operators = document.querySelectorAll(".operators button");
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
            screen.innerText += getDigit;
        })
    })

    operators.forEach(button => {
        button.addEventListener("click", () => {
            const getOperator = button.innerText;
            isOperatorClicked = true;
            operator = getOperator;
            screen.innerText += operator;
        })
    })
    
}


display();
