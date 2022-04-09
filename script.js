function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    if(num2 == 0) {return "error"}
    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function evaluate(num1, num2, operation) {
    let num3 = operation(num1, num2);
    console.log(num3);
}

evaluate(3, 9, multiply);
evaluate(3, 9, add);
evaluate(3, 0, divide);
evaluate(3, 10, divide);
evaluate(3, 9, subtract);
