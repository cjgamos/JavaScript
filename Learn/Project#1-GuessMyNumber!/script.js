'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'Correct Number!');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You guess it Correctly!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High! Guess Lower!';
        score--;
        console.log(document.querySelector('.score').textContent = score);
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low! Guess Higher!';
        score--;
        console.log(document.querySelector('.score').textContent = score);
    } else {
        document.querySelector('.message').textContent = 'Wrong! Guess again!';
    }
});
