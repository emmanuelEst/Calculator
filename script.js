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
        return Math.round(add(a, b) * 100) / 100;
    }
    if (operator === '-') {
        return Math.round(subtract(a, b) * 100) / 100;
    }
    if (operator === '*') {
        return Math.round(multiply(a, b) * 100) / 100;
    }
    if (operator === '/') {
        return Math.round(divide(a, b) * 100) / 100;
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
const clearText = () => {
    output.textContent = '';
}

// clears all values in equation object 
const clearBtn = document.querySelector('#clear-btn');

const clearAll = () => {
    equation.operands = [];
    equation.sign = '';
    equation.result = undefined;
    equation.signCalledCheck = false;

    output.textContent = '';
    topOutput.textContent = '';
}
toggleEventListeners([clearBtn], 'click', clearAll, 'add');

// Object holds a and b terms, operator sign, a check if a sign has been called
const equation = {
    operands: [],
    sign: '',
    result: undefined,
    signCalledCheck: false,
}

// function retrieves number before the sign and the sign itself

const getNumberAndFormatOutputs = (event) => {
    // Check allows for operator chaining
    if (equation.signCalledCheck === false) {
        // Adds the sign to the textContent | does not get show in output | is shown with line 80 but in topOutput
        output.textContent += event.target.innerHTML;

        equation.operands[0] = Number(output.textContent.slice(0, (output.textContent.length - 1)));
        equation.signCalledCheck = true;
        equation.sign = event.target.innerHTML;
        topOutput.textContent += output.textContent;

        // once a sign is clicked the output is cleared and shown in topOutput
        clearText();
    } else {
        evaluate();
        clearText();
        // assigns sign after evaluate is called | assigning before evaluate is called breaks the chaining effect
        // e.g 2+2, +6 , *10 would result in 240 | it should return 100
        // 2+2 would evaluate correctly, but when +6 is entered followed by *10, it would evaluate 4*6 then 24*10
        // This happens because evaluate needs the previous operator so +6 can execute 
        // then the sign is changed for if the equals button is pressed then *10 gets added to the previous result
        equation.sign = event.target.innerHTML;

        topOutput.textContent = equation.operands[0];
        topOutput.textContent += equation.sign;
    }
}

// Create sign event listeners
const signs = document.querySelectorAll('.signs');
toggleEventListeners(signs, 'click', getNumberAndFormatOutputs, 'add');

// equates expression
const equalsBtn = document.querySelector('#equals-btn');
function evaluate() {
    if (output.textContent === '') {
        displayErrorMessage();
    } else {

        equation.operands[1] = Number(output.textContent);
        if (equation.operands[0] === undefined) {
            output.textContent = `Result = ${output.textContent}`;
        } else {
            // result is added to the 0 index in operands | will only show if it is called by the 'equals' button | see line 85-88
            equation.operands[0] = operate(equation.sign, equation.operands[0], equation.operands[1]);
            equation.result = equation.operands[0];

            output.textContent = equation.operands[0];
        }
    }
}

toggleEventListeners([equalsBtn], 'click', evaluate, 'add');

function displayErrorMessage() {
    topOutput.textContent = '';
    output.textContent = 'Error please operate with two numbers'
}