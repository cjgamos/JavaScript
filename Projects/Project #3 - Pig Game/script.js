'use strict';

// Score Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const curret1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



// Condition on Start
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;


// Rolling Func
btnRoll.addEventListener('click', () => {
    // Generate Random Number 1-6
    const dice = Number(Math.trunc(Math.random() * 6) + 1);
    console.log(dice);

    // Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // Check rolledL if true switch player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        current0.textContent = currentScore;
    } else {
        // Next Player
    }
});

