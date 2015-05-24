"use strict";

var playerScore = 0,
    compScore = 0;

var playerCards = $(".player-card"),
    computerCard = $("#comp-card-whole");

var rock = $(".fa-diamond").clone(),
    paper = $(".fa-paper-plane").clone(),
    scissors = $(".fa-scissors").clone();

var backOfCard = $(".back");

function game(choice) {
  // Houses main game functionality.

  function compChoice() {
    // Uses Math.random to pick rock, paper or scissors.
    var choice = Math.random();

    if (choice <= 0.33) {
      choice = "rock";
      backOfCard.append(rock);
    } else if (choice >= 0.66) {
      choice = "paper";
      backOfCard.append(paper);
    } else {
      choice = "scissors";
      backOfCard.append(scissors);
    }

    return choice;
  }

  var player = choice;
  var computer = compChoice();

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

  computerCard.flip(true);
  console.log("Player score: ", playerScore);
  console.log("Comp score: ", compScore);
}

// Resets game to beginning state.
function gameReset() {
  computerCard.flip(false);
  backOfCard.empty();
}

computerCard.flip({
  axis: 'y',
  trigger: 'manual',
  reverse: true,
  speed: 500
});

// Clicking on a card initiates the game.
playerCards.click(function() {
  game(this.id);
  setTimeout(gameReset, 1500);
});
