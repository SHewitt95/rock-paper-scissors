"use strict";

var player,
    computer;

var playerScore,
    compScore;

// var playerCards = document.getElementsByClassName("player-card");
var rock = document.getElementById("rock-card"),
    paper = document.getElementById("paper-card"),
    scissors = document.getElementById("scissors-card");

console.log(rock);
console.log(paper);
console.log(scissors);

function playerChoice() {

}

function compChoice() {
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
