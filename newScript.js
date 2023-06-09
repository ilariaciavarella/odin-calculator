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
    let sol;
    switch(oper) {
        case 'add':
            sol = add(a, b);
            break;
        case 'subtr':
            sol = subtr(a, b);
            break;
        case 'mult':
            sol = mult(a, b);
            break;
        case 'div':
            sol = div(a, b);
            break;
    }

    if (sol.toString().length > 8) {
        if (sol > 99999) {
            sol = sol.toExponential(2);
        } else {
            sol = sol.toString().slice(0, 8);
        }
    }
    return sol;
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
    opers.forEach(oper => oper.classList.remove('operClicked'));
}))

document.addEventListener('keypress', (e) => {
    let num = e.key;
    if (num.match(/\d/g)) {
        if (inputOne == true) {
            if (numOne.length < 8) {
                numOne += num;
                displayNum(numOne);
                console.log(numOne);
            }
        } else {
            if (numTwo.length < 8) {
                numTwo += num;
                displayNum(numTwo);
                console.log(numTwo);
            }
        }
        opers.forEach(oper => oper.classList.remove('operClicked'));
    }
})

// add dots
const dot = document.querySelector('.dot');

dot.addEventListener('click', (e) => {
    if (inputOne == true) {
        if (numOne.length < 8 && !numOne.includes('.')) {
            numOne += e.target.textContent;
            displayNum(numOne);
            console.log(numOne);
        }
    } else {
        if (numTwo.length < 8 && !numTwo.includes('.')) {
            numTwo += e.target.textContent;
            displayNum(numTwo);
            console.log(numTwo);
        }
    }
    opers.forEach(oper => oper.classList.remove('operClicked'));
})

document.addEventListener('keypress', (e) => {
    let dot = e.key;
    if (dot == '.') {
        if (inputOne == true) {
            if (numOne.length < 8 && !numOne.includes('.')) {
                numOne += dot;
                displayNum(numOne);
                console.log(numOne);
            }
        } else {
            if (numTwo.length < 8 && !numTwo.includes('.')) {
                numTwo += dot;
                displayNum(numTwo);
                console.log(numTwo);
            }
        }
        opers.forEach(oper => oper.classList.remove('operClicked'));
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

document.addEventListener('keypress', (e) => {
    let operKey = e.key;
    if (operKey == '+' || operKey == '-' || operKey == '*' || operKey == '/') {
        if (inputOne == true) {
            switch (operKey) {
                case '+':
                    operator = 'add';
                    break;
                case '-':
                    operator = 'subtr';
                    break;
                case '*':
                    operator = 'mult';
                    break;
                case '/':
                    operator = 'div';
                    break;

            }
            console.log(operator);
            inputOne = false;
        } else {
            let solution = operate(operator, +numOne, +numTwo);
            displayNum(solution);
            switch (operKey) {
                case '+':
                    operator = 'add';
                    break;
                case '-':
                    operator = 'subtr';
                    break;
                case '*':
                    operator = 'mult';
                    break;
                case '/':
                    operator = 'div';
                    break;

            }
            numOne = solution;
            numTwo = '';
            console.log(operator);
        }
    }
})

// one num operators
const sqrt = document.querySelector('#sqrt');
const perc = document.querySelector('#perc');

sqrt.addEventListener('click', () => {
    if (inputOne == true) {
        let solution = sqRoot(numOne);
        if (solution.toString().length > 8) {
            if (solution > 99999) {
                solution = solution.toExponential(2);
            } else {
                solution = solution.toString().slice(0, 8);
            }
        }
        displayNum(solution);
        numOne = solution;
        numTwo = '';
    }
});

perc.addEventListener('click', () => {
    if (inputOne == true) {
        let solution = percent(numOne);
        if (solution.toString().length > 8) {
            if (solution > 99999) {
                solution = solution.toExponential(2);
            } else {
                solution = solution.toString().slice(0, 8);
            }
        }
        displayNum(solution);
        numOne = solution;
        numTwo = '';
    }
});

document.addEventListener('keypress', (e) => {
    let percKey = e.key;
    if (percKey == '%') {
        if (inputOne == true) {
            let solution = percent(numOne);
            if (solution.toString().length > 8) {
                if (solution > 99999) {
                    solution = solution.toExponential(2);
                } else {
                    solution = solution.toString().slice(0, 8);
                }
            }
            displayNum(solution);
            numOne = solution;
            numTwo = '';
        }
    }
})

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
        return;
    }
})

document.addEventListener('keypress', (e) => {
    let eqKey = e.key;
    if (eqKey == '=' || eqKey == 'Enter') {
        if (inputOne == false) {
            displayNum(operate(operator, +numOne, +numTwo));
            numOne = '';
            numTwo = '';
            operator = '';
            inputOne = true;
        } else {
            return;
        }
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

document.addEventListener('keydown', (e) => {
    let cancKey = e.key;
    if (cancKey == 'Escape') {
        numOne = '';
        numTwo = '';
        operator = '';
        inputOne = true;
        displayNum(0);
    }
})

//delete
del.addEventListener('click', () => {
    if (inputOne == true) {
        numOne = numOne.slice(0, numOne.length - 1);
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

document.addEventListener('keydown', (e) => {
    let delKey = e.key;
    if (delKey == 'Backspace') {
        if (inputOne == true) {
            numOne = numOne.slice(0, numOne.length - 1);
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
    }
})

// visual feedback
const otherOperFb = document.querySelectorAll('.feedback');
const addBtn = document.querySelector('#add');
const subtrBtn = document.querySelector('#subtr');
const multBtn = document.querySelector('#mult');
const divBtn = document.querySelector('#div');

addBtn.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
    subtrBtn.classList.remove('operClicked');
    multBtn.classList.remove('operClicked');
    divBtn.classList.remove('operClicked');
})

subtrBtn.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
    addBtn.classList.remove('operClicked');
    multBtn.classList.remove('operClicked');
    divBtn.classList.remove('operClicked');
})

multBtn.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
    subtrBtn.classList.remove('operClicked');
    addBtn.classList.remove('operClicked');
    divBtn.classList.remove('operClicked');
})

divBtn.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
    subtrBtn.classList.remove('operClicked');
    multBtn.classList.remove('operClicked');
    addBtn.classList.remove('operClicked');
})

numbers.forEach(number => number.addEventListener('mousedown', (e) => {
    e.target.classList.add('numClicked');
}));

numbers.forEach(number => number.addEventListener('mouseup', (e) => {
    e.target.classList.remove('numClicked');
}));

dot.addEventListener('mousedown', (e) => {
    e.target.classList.add('numClicked');
})

dot.addEventListener('mouseup', (e) => {
    e.target.classList.remove('numClicked');
})

otherOperFb.forEach(feedback => feedback.addEventListener('mousedown', (e) => {
    e.target.classList.add('operClicked');
}))

otherOperFb.forEach(feedback => feedback.addEventListener('mouseup', (e) => {
    e.target.classList.remove('operClicked');
}))