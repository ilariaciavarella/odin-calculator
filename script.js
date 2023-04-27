// ELEMENTS
let first = 0;
let second = 0;
let operator;
let solution;

// OPERATIONS
function addition (a, b) {
    return  a + b;
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
    if (Number.isInteger(a/b)) {
        return a / b;
    } else {
        return (a / b).toFixed(6);
    }
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

function displayNumber(num) {
    dispNum.textContent = num;
}

// Select first number
let counter = 0;
const numbers = document.querySelectorAll('.num');

numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter === 0) {
        first = '';
        first += e.target.textContent;
        displayNumber(first);
        opers.forEach(oper => oper.classList.remove('operClicked'));
    }
    console.log(counter);
    console.log(first);
}));

// Select operator
const opers = document.querySelectorAll('.oper');

const add = document.querySelector('#add')
const subtr = document.querySelector('#subtr')
const mult = document.querySelector('#mult')
const div = document.querySelector('#div')

// opers.forEach(oper => oper.addEventListener('click', (e) => {
//     counter++;
//     operator = e.target.id;
//     e.target.classList.toggle('operClicked');
// 
//     console.log(counter);
//     console.log(operator);
// }))

add.addEventListener('click', (e) => {
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.toggle('operClicked');

    console.log(counter);
    console.log(operator);
});

subtr.addEventListener('click', (e) => {
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.toggle('operClicked');

    console.log(counter);
    console.log(operator);
});

mult.addEventListener('click', (e) => {
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.toggle('operClicked');

    console.log(counter);
    console.log(operator);
});

div.addEventListener('click', (e) => {
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.toggle('operClicked');

    console.log(counter);
    console.log(operator);
});

// Select second number
numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter !== 0) { 
        second = '';
        second += e.target.textContent;
        displayNumber(second);
    }
    console.log(second);
}));

// Do operation
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    counter = 0;
    operate(+first, +second, operator);
    console.log(solution);
    dispNum.textContent = solution;
    opers.forEach(oper => oper.classList.remove('operClicked'));

    first = 0;
    second = 0;
});






// Square root
const sqrt = document.querySelector('#sqrt');
sqrt.addEventListener('click', (e) => {
    e.target.classList.add('operClicked');
    if (counter == 0) {
        solution = sqRoot(first);
        console.log(solution);
        if (Number.isInteger(solution)) {
            dispNum.textContent = solution;
        } else {
            dispNum.textContent = solution.toFixed(6);
        }
    }

    counter = 0;
    first = '';
    second = '';
})

// Percent
const perc = document.querySelector('#perc');
perc.addEventListener('click', (e) => {
    e.target.classList.add('operClicked');
    if (counter == 0) {
        solution = percent(first);
        console.log(solution);
        dispNum.textContent = solution.toFixed(6);
    }

    counter = 0;
    first = '';
    second = '';
})