'use strict';

const result = document.querySelector('.result');

let A, B, SIGNE;

const btnZero = document.querySelector('.btn--zero');
const btnOne = document.querySelector('.btn--one');
const btnTwo = document.querySelector('.btn--two');
const btnThree = document.querySelector('.btn--three');
const btnFour = document.querySelector('.btn--four');
const btnFive = document.querySelector('.btn--five');
const btnSix = document.querySelector('.btn--six');
const btnSeven = document.querySelector('.btn--seven');
const btnEight = document.querySelector('.btn--eight');
const btnNine = document.querySelector('.btn--nine');
const comma = document.querySelector('.btn--comma');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mult = document.querySelector('.mult');
const divi = document.querySelector('.divi');
const equal = document.querySelector('.equal');

const reset = document.querySelector('.btn--reset');
const del = document.querySelector('.btn--del');

const clear = () => {
    result.textContent = '';
};

const calc = (SIGNE) => {
    B = result.textContent;
    result.textContent = '';

    if (A !== undefined && B !== undefined) {
        if (SIGNE == '+') {
            result.textContent = parseFloat(A) + parseFloat(B);
        } else if (SIGNE == '-') {
            result.textContent = parseFloat(A) - parseFloat(B);
        } else if (SIGNE == 'x') {
            result.textContent = parseFloat(A) * parseFloat(B);
        } else if (SIGNE == '/') {
            result.textContent = parseFloat(A) / parseFloat(B);
        }
    }
    SIGNE = '';
};

reset.addEventListener('click', function () {
    result.textContent = '';
    (A = undefined), (B = undefined), (SIGNE = '');
});

del.addEventListener('click', function () {
    let aux = '',
        str = result.textContent;
    for (let i = 0; i < str.length - 1; i++) {
        aux += str[i];
    }
    result.textContent = aux;
});

btnZero.addEventListener('click', () => {
    result.textContent += '0';
});

btnOne.addEventListener('click', () => {
    result.textContent += '1';
});
btnTwo.addEventListener('click', () => {
    result.textContent += '2';
});
btnThree.addEventListener('click', () => {
    result.textContent += '3';
});
btnFour.addEventListener('click', () => {
    result.textContent += '4';
});
btnFive.addEventListener('click', () => {
    result.textContent += '5';
});
btnSix.addEventListener('click', () => {
    result.textContent += '6';
});
btnSeven.addEventListener('click', () => {
    result.textContent += '7';
});
btnEight.addEventListener('click', () => {
    result.textContent += '8';
});
btnNine.addEventListener('click', () => {
    result.textContent += '9';
});
comma.addEventListener('click', () => {
    result.textContent += '.';
});

// OPERATIONS

plus.addEventListener('click', () => {
    A = result.textContent;
    SIGNE = '+';
    clear();
});

minus.addEventListener('click', () => {
    A = result.textContent;
    SIGNE = '-';
    clear();
});

mult.addEventListener('click', () => {
    A = result.textContent;
    SIGNE = 'x';
    clear();
});

divi.addEventListener('click', () => {
    A = result.textContent;
    SIGNE = '/';
    clear();
});

equal.addEventListener('click', () => {
    calc(SIGNE);
});
