'use strict';
const rollDice = document.querySelector('.btn--roll');
const diceValue = document.querySelector('.dice');

document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');
const generateRandomDiceNumber = function () {
  return Math.round(Math.random() * 6);
};
//User rolls a dice
rollDice.addEventListener('click', function () {
  console.log(`Random Number generated is ${generateRandomDiceNumber()}`);
  document.querySelector('.body').sty;
});
