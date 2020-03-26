'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const myInput = document.querySelector('#name-input');
const mySpan = document.querySelector('#name-output');
// console.log(myInput);
// console.log(mySpan);

myInput.addEventListener('input', newInput);

function newInput(e) {
    // console.log(e.currentTarget);
    mySpan.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        mySpan.textContent = "незнакомец";
    }
};