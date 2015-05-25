"use strict";

/*
Code for JQuery flip method found at http://nnattawat.github.io/flip/
*/

var playerScore = 0,
    compScore = 0;

var playerCards = $(".player-card"),
    computerCard = $("#comp-card-whole");

var rock = $(".fa-diamond").clone(),
    paper = $(".fa-paper-plane").clone(),
    scissors = $(".fa-scissors").clone();

var backOfCard = $(".back");

// Houses main game functionality.
function game(playerChoice) {

  // Uses Math.random to pick rock, paper or scissors.
  function compChoice() {
    var computerChoice = Math.random();

    if (computerChoice <= 0.33) {
      computerChoice = "rock";
      backOfCard.append(rock);
    } else if (computerChoice >= 0.66) {
      computerChoice = "paper";
      backOfCard.append(paper);
    } else {
      computerChoice = "scissors";
      backOfCard.append(scissors);
    }

    return computerChoice;
  }

  var player = playerChoice;
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

// Initializes properties of the card flip.
computerCard.flip({
  axis: 'y',
  trigger: 'manual',
  reverse: true,
  speed: 500
});

// Clicking on a card initiates the game.
playerCards.click(function() {
  game(this.id);
  setTimeout(gameReset, 1150);
});
