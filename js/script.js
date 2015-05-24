"use strict";

var playerScore = 0,
    compScore = 0;

var playerCards = $(".player-card"),
    computerCard = $("#comp-card-whole");

function game(choice) {
  // Houses main game functionality.

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

  computerCard.flip(true);

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

  //computerCard.flip(false);
  console.log("Player score: ", playerScore);
  console.log("Comp score: ", compScore);
}


// Clicking on a card initiates the game.
playerCards.click(function() {
  game(this.id);
});

computerCard.flip({
  axis: 'y',
  reverse: true,
  speed: 500
});
