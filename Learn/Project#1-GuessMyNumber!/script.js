'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'Correct Number!');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
*/


document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
})