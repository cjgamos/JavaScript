'use strict';

let score = 20;
let highscore = 0;

const wrongAnswer = function () {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
};

const correctAnswer = function () {
    if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    } else {
        document.querySelector('.highscore').textContent = highscore;
    }
};

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        correctAnswer();
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High!';
        wrongAnswer();
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!';
        wrongAnswer();
    }
});
