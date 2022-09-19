// sums a and b
const add = (a, b) => a + b;

// subtracts b from a
const subtract = (a, b) => a - b;

// multiplies a and b
const multiply = (a, b) => a * b;

// divides a by b
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
}

// Creates event listeners
// 'array' parameter has to be an array; singular DOM elements should be in an array; e.g toggleEventListeners([element]...)
const toggleEventListeners = (array, eventType, func, toggle) => {
    if (toggle === 'add') {
        array.forEach(element => {
            element.addEventListener(eventType, func);
        });

    } else if (toggle === 'remove') {
        array.forEach(element => {
            element.removeEventListener(eventType, func);
        });

    }
};

// write number to output 
const output = document.querySelector('#output')
const topOutput = document.querySelector('#top-output');
const numberButtons = document.querySelectorAll('.number');
toggleEventListeners(numberButtons, 'click', addText, 'add'); // adds event listeners to all buttons with a 'number' class

function addText(event) {
    output.textContent += event.target.innerHTML;
}

// clears the string text in 'output' div
const clearBtn = document.querySelector('#clear-btn');
const clearText = () => {
    output.textContent = '';
}

toggleEventListeners([clearBtn], 'click', clearText, 'add');

// Object holds a and b terms, operator sign, and results of operation
const equation = {
    operands: [],
    sign: '',
    result: undefined,
}

// function retrieves number before the sign and the sign itself

const getNumberAndSign = (event) => {
    output.textContent += event.target.innerHTML;
    equation.operands[0] = output.textContent.slice(0, (output.textContent.length - 1));
    equation.sign = output.textContent.slice(output.textContent.length - 1);
    topOutput.textContent += output.textContent;
    clearText();
}

// Create sign event listeners
const signs = document.querySelectorAll('.signs');
toggleEventListeners(signs, 'click', getNumberAndSign, 'add');

