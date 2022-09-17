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
