'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
/*console.log(score);
console.log(score.length);
document.querySelector('.dice').classList.;
for (let i = 0; i <= score.length - 1; i++) {
  console.log((score[i].textContent = 0));
}*/
score0.textContent = 0;
score1.textContent = 0;
let currentEl0 = document.querySelector('#current--0');
let currentEl1 = document.querySelector('#current--1');
let currentScore = 0;
let activeplayer = 0;
let highScore = 0;
const dice = document.querySelector('.dice');
dice.classList.add('hidden');
let randice = Math.trunc(Math.random() * 6 + 1);
console.log(randice);
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function () {
  let clickRoll = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${clickRoll}.png`;

  if (clickRoll !== 1) {
    currentScore += clickRoll;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  highScore += currentScore;
  document.querySelector(`#score--${activeplayer}`).textContent = highScore;
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
  if (document.querySelector(`#score--${activeplayer}`).textContent >= 10) {
    document.querySelector(`.player--${activeplayer}`).style.backgroundColor =
      'black';
  }

  document.querySelector(`.player--${activeplayer}`);
});
