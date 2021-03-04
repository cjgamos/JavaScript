'use strict';

// Score Selecting Elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Switch Next Player
const nextPlayer = () => {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
};


// Condition on Start
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let running = true;

// Rolling Func
btnRoll.addEventListener('click', () => {
    if (running) {
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
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch Player
            nextPlayer();
        }
    }

});

// Hold Func
btnHold.addEventListener('click', () => {

    if (running) {
        // Add Current Score
        const totalScore = scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = totalScore;
        // Check score if 100
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.getElementById(`name--${activePlayer}`).textContent = `Player ${activePlayer + 1} has won`;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            running = false;
        }
        // Switch Player
        nextPlayer();
    }
});

btnNew.addEventListener('click', () => {
    running = true;
    scores = [0, 0];
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

});


