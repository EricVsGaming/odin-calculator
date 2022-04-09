// Global variables

let firstNum = '';
let secondNum = undefined;
let operation = '';
const display = document.querySelector('.display > h1');

// Calculator functions

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    if(num2 == 0) {
        clear();
        return ''
    }

    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function operationHandler(operation) {
    switch(operation) {
        case '+':
            return add;
        case '-':
            return subtract;
        case '/':
            return divide;
        case '*':
            return multiply;
    }
}

function clear() {
    firstNum = '';
    secondNum = undefined;
    operation = '';
    display.innerText = '';
}

function evaluate(num1, num2, operationFunction) {
    firstNum = (operationFunction(num1, num2));
    secondNum = undefined;
    operation = '';
    console.log(`operation reset to ${operation}`);
    display.innerText = firstNum;
}

// Event listeners for the buttons
const buttons = document.querySelectorAll('.numpad > .btn');
const operations = document.querySelectorAll('.operations > .btn');
const equals = document.querySelector('.equals');
const clearbtn = document.querySelector('.clear');
const zero = document.querySelector('.zero');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.target.innerText);
        if(operation == '') {
            display.innerText += event.target.innerText;
            firstNum += (event.target.innerText);
            console.log('firstNum = ' + firstNum);
        } else if (secondNum === undefined) {
            display.innerText += ' ' + event.target.innerText;
            secondNum = event.target.innerText;
            console.log('secondNum = ' + secondNum);
        } else {
            display.innerText += event.target.innerText;
            secondNum += event.target.innerText;
            console.log('secondNum = ' + secondNum);
        }
    });
});

operations.forEach(button => {
    button.addEventListener('click', event => {
        if(operation == '') {
            operation = event.target.textContent;
        }
        display.textContent += ` ${operation} `;
        console.log(`secondNum = ${secondNum}`);
        if(secondNum != undefined) {
            evaluate(Number(firstNum), Number(secondNum), operationHandler(operation));
        }
    })
});

equals.addEventListener('click', event => {
    evaluate(Number(firstNum), Number(secondNum), operationHandler(operation));
});

clearbtn.addEventListener('click', clear);

zero.addEventListener('click', event => {
    if(operation == '') {
        display.innerText += event.target.innerText;
        firstNum += (event.target.innerText);
        console.log('firstNum = ' + firstNum);
    } else if (secondNum === undefined) {
        display.innerText += ' ' + event.target.innerText;
        secondNum = event.target.innerText;
        console.log('secondNum = ' + secondNum);
    } else {
        display.innerText += event.target.innerText;
        secondNum += event.target.innerText;
        console.log('secondNum = ' + secondNum);
    }
});