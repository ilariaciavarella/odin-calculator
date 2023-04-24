// OPERATIONS
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b == 0) {
        return 'ERR';
    }
    return a / b;
}

function sqRoot (a) {
    if (a < 0) {
        return 'ERR';
    }
    return Math.sqrt(a);
}

// PARTS OF CALCULATION
let first;
let second;
let operator;

// OPERATE FUNCTION
function operate (a, b, oper) {
    switch (oper) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}