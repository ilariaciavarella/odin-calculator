// ELEMENTS
let first;
let second;
let operator;
let solution;

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

function percent(a) {
    return a / 100;
}

// OPERATE FUNCTION
function operate (x, y, operation) {
    switch (operation) {
        case 'add':
            solution = add(x, y);
            break;
        case 'subtr':
            solution = subtract(x, y);
            break;
        case 'mult':
            solution = multiply(x, y);
            break;
        case 'div':
            solution = divide(x, y);
            break;
    }
    return solution;
}

// Numbers on display
const dispNum = document.querySelector('#dispNum');

function displayNumber(e) {
    let num = e.target.textContent;
    dispNum.textContent = num;
}

const numbers = document.querySelectorAll('.num');
numbers.forEach(number => number.addEventListener('click', displayNumber));

let counter = 0;

numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter == 0) {
        first = e.target.textContent;
    }
    console.log(counter);
    console.log(first);
}));

numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter == 1) { 
        second = e.target.textContent;
    }
    console.log(second);
}));

const opers = document.querySelectorAll('.oper');
opers.forEach(oper => oper.addEventListener('click', (e) => {
    counter++;
    operator = e.target.id;
    e.target.classList.toggle('operClicked');
}))

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    counter = 0;
    operate(first, second, operator);
    console.log(solution);
    dispNum.textContent = solution;
});

const sqrt = document.querySelector('#sqrt');
sqrt.addEventListener('click', (e) => {
    e.target.classList.add('operClicked');
    if (counter == 0) {
        solution = sqRoot(first);
        console.log(solution);
        dispNum.textContent = solution;
    }
})

const perc = document.querySelector('#perc');
perc.addEventListener('click', (e) => {
    e.target.classList.add('operClicked');
    if (counter == 0) {
        solution = percent(first);
        console.log(solution);
        dispNum.textContent = solution;
    }
})