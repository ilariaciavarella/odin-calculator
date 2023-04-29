// operations functions
function add(a, b) {
    return a + b;
}

function subtr(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        return 'ERR';
    }
    return a / b;
}

function sqRoot(a) {
    if (a < 0) {
        return 'ERR';
    }
    return Math.sqrt(a);
}

function percent(a) {
    return a / 100;
}

function operate(oper, a, b) {
    switch(oper) {
        case 'add':
            return add(a, b);
            break;
        case 'subtr':
            return subtr(a, b);
            break;
        case 'mult':
            return mult(a, b);
            break;
        case 'div':
            return div(a, b);
            break;
    }
}

// elements
let numOne = '';
let numTwo = '';
let operator;

//display numbers
const dispNum = document.querySelector('#dispNum');
function displayNum (num) {
    dispNum.textContent = num;
}

// select numbers
const numbers = document.querySelectorAll('.num');

let inputOne = true;
numbers.forEach(number => number.addEventListener('click', (e) => {
    if (inputOne == true) {
        if (numOne.length < 8) {
            numOne += e.target.textContent;
            displayNum(numOne);
            console.log(numOne);
        }
    } else {
        if (numTwo.length < 8) {
            numTwo += e.target.textContent;
            displayNum(numTwo);
            console.log(numTwo);
        }
    }
}))

// add dots
const dot = document.querySelector('.dot');

dot.addEventListener('click', (e) => {
    if (inputOne == true) {
        if (numOne.length < 8) {
            numOne += e.target.textContent;
            displayNum(numOne);
            console.log(numOne);
        }
    } else {
        if (numTwo.length < 8) {
            numTwo += e.target.textContent;
            displayNum(numTwo);
            console.log(numTwo);
        }
    }
})

// select operator
const opers = document.querySelectorAll('.oper');
opers.forEach(oper => oper.addEventListener('click', (e) => {
    if (inputOne == true) {
        operator = e.target.id;
        console.log(operator);
        inputOne = false;
    } else {
        let solution = operate(operator, +numOne, +numTwo);
        displayNum(solution);
        operator = e.target.id;
        numOne = solution;
        numTwo = '';
        console.log(operator);
    }
}))

// one num operators
const sqrt = document.querySelector('#sqrt');
const perc = document.querySelector('#perc');

sqrt.addEventListener('click', () => {
    if (inputOne == true) {
        let solution = sqRoot(numOne);
        displayNum(solution);
        numOne = solution;
        numTwo = '';
    }
});

perc.addEventListener('click', () => {
    if (inputOne == true) {
        let solution = percent(numOne);
        displayNum(solution);
        numOne = solution;
        numTwo = '';
    }
});

// do operation
const equal = document.querySelector('#equal');

equal.addEventListener('click', () => {
    if (inputOne == false) {
        displayNum(operate(operator, +numOne, +numTwo));
        numOne = '';
        numTwo = '';
        operator = '';
        inputOne = true;
    } else {
        displayNum(numOne);
        numOne = '';
        numTwo = '';
        operator = '';
        inputOne = true;
    }
})


// clear
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');

clear.addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    inputOne = true;
    displayNum(0);
})

//delete
del.addEventListener('click', () => {
    if (inputOne == true) {
        numOne = numOne.slice(0, numOne.length - 1);
        console.log(numOne);
        displayNum(numOne);
        if (numOne.length < 1) {
            displayNum(0);
        }
    } else {
        numTwo = numTwo.slice(0, numTwo.length - 1);
        displayNum(numTwo);
        if (numTwo.length < 1) {
            displayNum(0);
        }
    }
})

// feedback visivi
