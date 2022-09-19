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
const numberButtons = document.querySelectorAll('.number');
toggleEventListeners(numberButtons, 'click', addText, 'add'); // adds event listeners to all buttons with a 'number' class

function addText(event) {
    output.textContent += event.target.innerHTML;
}