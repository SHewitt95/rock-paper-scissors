"use strict";

var playerScore = 0,
    compScore = 0;

function game(choice) {

  function compChoice() {
    // Uses Math.random to pick rock, paper or scissors.
    var choice = Math.random();

    if (choice <= 0.33) {
      choice = "rock";
    } else if (choice >= 0.66) {
      choice = "paper";
    } else {
      choice = "scissors";
    }

    return choice;
  }

  var player = choice;
  var computer = compChoice();

  // console.log(player);
  // console.log(computer);

  if (player == "rock") { // First part of "if" block...

    if (computer == "rock") {
      // Tie! No points given.
    } else if (computer == "paper") {
      // Computer gets a point.
      compScore++;
    } else {
      // Player gets a point.
      playerScore++;
    }

  } else if (player == "paper") { // Second part of "if" block...

    if (computer == "rock") {
      // Player gets a point.
      playerScore++;
    } else if (computer == "paper") {
      // Tie! No points given.
    } else if (computer == "scissors") {
      // Computer gets a point.
      compScore++;
    }

  } else if (player == "scissors") { // Third part of "if" block...

    if (computer == "rock") {
      // Computer gets a point.
      compScore++;
    } else if (computer == "paper") {
      // Player gets a point.
      playerScore++;
    } else if (computer == "scissors") {
      // Tie! No points given.
    }

  }

  console.log("Player score: ", playerScore);
  console.log("Comp score: ", compScore);
}


$(".player-card").click(function() {
  game(this.id);
});
