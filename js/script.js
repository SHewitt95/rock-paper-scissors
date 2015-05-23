"use strict";

var playerChoice,
    compChoice;

function pickChoice() {
  // Uses Math.random to pick rock, paper or scissors.
  var choice = Math.random();

  if (choice <= 0.33) {

    choice = 0; // 0 represents rock

  } else if (choice >= 0.66) {

    choice = 1; // 1 represents paper

  } else {

    choice = 2; // 2 represents scissors

  }

  return choice;
}

var number = pickChoice();
console.log(number);
