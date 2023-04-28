// ELEMENTS
let first = '';
let second = '';
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
            solution = addition(x, y);
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
let digitCounter = 0;
const numbers = document.querySelectorAll('.num');

numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter === 0) {
        digitCounter++
        console.log(digitCounter);
        if (digitCounter < 9) {
            first += e.target.textContent;
            displayNumber(first);
            opers.forEach(oper => oper.classList.remove('operClicked'));
        }
    }
    //console.log(counter);
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

opers.forEach(oper => oper.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
}))

add.addEventListener('click', (e) => {
    digitCounter = 0;
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.add('operClicked');

    console.log(counter);
    console.log(operator);
});

subtr.addEventListener('click', (e) => {
    digitCounter = 0;
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.add('operClicked');

    console.log(counter);
    console.log(operator);
});

mult.addEventListener('click', (e) => {
    digitCounter = 0;
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.add('operClicked');

    console.log(counter);
    console.log(operator);
});

div.addEventListener('click', (e) => {
    digitCounter = 0;
    counter++;
    operator = e.target.id;
    opers.forEach(oper => oper.classList.remove('operClicked'));
    e.target.classList.add('operClicked');

    console.log(counter);
    console.log(operator);
});

// Select second number
numbers.forEach(number => number.addEventListener('click', (e) => {
    if (counter !== 0) { 
        digitCounter++
        if(digitCounter < 9) {
            second += e.target.textContent;
            displayNumber(second);
        }
    }
    console.log(second);
}));

// Do operation
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    counter = 0;
    operate(+first, +second, operator);
    console.log(solution);
    displayNumber(solution);
    opers.forEach(oper => oper.classList.remove('operClicked'));

    first = 0;
    second = 0;
});


// Numbers color transition
numbers.forEach(number => number.addEventListener('mousedown', (e) => {
    e.target.classList.add('numClicked');
}));

numbers.forEach(number => number.addEventListener('mouseup', (e) => {
    e.target.classList.remove('numClicked');
}));

// Clear and delete
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');

clear.addEventListener('click', () => {
    if (counter === 0) {
        first = '';
        console.log(first);
        digitCounter = 0;
        console.log(digitCounter);
        displayNumber(0);
    } else {
        second = '';
        displayNumber(0);
    }
})

clear.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
});
clear.addEventListener('mouseup', (e) => {
    e.target.classList.remove('operClicked');
});


del.addEventListener('click', () => {
    if (counter === 0) {
        first = first.slice(0, first.length - 1);
        console.log(first);
        console.log(digitCounter);
        displayNumber(first);
        digitCounter--;
    } else {
        second = second.slice(0, second.length - 1);
        displayNumber(second);
        digitCounter--;
    }
})

del.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
});
del.addEventListener('mouseup', (e) => {
    e.target.classList.remove('operClicked');
});

// Square root
const sqrt = document.querySelector('#sqrt');
sqrt.addEventListener('click', () => {
    if (counter == 0) {
        solution = sqRoot(first);
        console.log(solution);
        displayNumber(solution);
    }

    counter = 0;
    first = '';
    second = '';
});

sqrt.addEventListener('mouseup', (e) => {
    e.target.classList.remove('operClicked');
});

// Percent
const perc = document.querySelector('#perc');
perc.addEventListener('click', () => {
    if (counter == 0) {
        solution = percent(first);
        console.log(solution);
        displayNumber(solution);
    }

    counter = 0;
    first = '';
    second = '';
});

perc.addEventListener('mouseup', (e) => {
    e.target.classList.remove('operClicked');
});