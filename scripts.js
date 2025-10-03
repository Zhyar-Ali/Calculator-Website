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
