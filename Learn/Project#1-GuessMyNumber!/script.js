'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', () => {
    console.log(document.querySelector('.guess').value);
});
