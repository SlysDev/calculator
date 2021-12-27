// Query Selections

let equals = document.querySelector('#equals')

let operationHistory = [];

let displayValue = [];

let operators = [];

let finals = [];

let currentEvaluation = [];

let display = document.querySelector('#calculator-display');

let buttons = document.querySelectorAll('button');

//  Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '÷') {
        return divide(a, b);
    } else {
        return multiply(a, b);
    }
}

function populateOperator(operator) {
    displayValue.push(operator);
    display.textContent += ' ' + operator + ' ';
    displayValue.push('');
}

function populate(num) {
    if (displayValue.length === 0) {
        displayValue.push(num);
        display.textContent = num;
    } else {
        displayValue[displayValue.length - 1] += num;
        display.textContent += num;
    }
    
    
}
// if the displayValue is empty, it pushes the number clicked into the array as a new element. The else portion of this statement allows you to type multi-digit numbers, like 88. 8 is evaluated first, and then, when you click 8 again, the else portion of the statement is run, which appends the number to the last element in the array.

// Event Listeners


buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent === 'C') {
            displayValue = [];
            display.textContent = '';
        } else if (button.classList.contains('operator')) {
            operators.push(button.textContent);
            console.log(operators);
            populateOperator(button.textContent);
        } else if (button.textContent === '=') {
            while (operators.length !== 0) {
                finals.push(operate(operators[0], currentEvaluation[0], currentEvaluation[1]));
                currentEvaluation.shift();
                operators.shift();
                
                currentEvaluation[0] = finals[finals.length - 1];
                console.log(finals);
            }
            display.textContent = finals[finals.length - 1].toString();
            displayValue = finals[finals.length - 1].toString();
        } else {
            currentEvaluation.push(button.textContent)
            populate(button.textContent);
        }
        
    });
});

// equals.addEventListener('click', function evaluateEquation() {
//     let operator = displayValue[1];
//     let num1 = parseInt(displayValue[0]);
//     let num2 = parseInt(displayValue[2]);
//     populate(operate(operator, num1, num2));
//     operationHistory.push(displayValue);
//     displayValue = [operate(operator, num1, num2)];
//     display.textContent = operate(operator, num1, num2);
// });