"use strict";

/*
Code for JQuery flip method found at http://nnattawat.github.io/flip/
*/

// Variables containing the current scores.
var playerScore = 0,
    compScore = 0;

// Variables containing the DOM elements that will hold the current scores.
var playerScoreBox = $("#player-score"),
    compScoreBox = $("#comp-score");

// Variables containing the player's and computer's cards.
var playerCards = $(".player-card"),
    computerCard = $("#comp-card-whole");

// Variables containing clones of the three icons that represent rock/paper/scissors.
var rock = $(".fa-diamond").clone(),
    paper = $(".fa-paper-plane").clone(),
    scissors = $(".fa-scissors").clone();

// Variable containing where the icons will appear on the computer's card.
var backOfCard = $(".back");

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

// Updates scores as game continues.
function updateScore() {
  // Empties score boxes of any current content.
  playerScoreBox.empty();
  compScoreBox.empty();

  // Appends current scores to score boxes.
  playerScoreBox.append(playerScore);
  compScoreBox.append(compScore);
}

// Alerts user of who won game. Refreshes page for next round.
function declareWinner() {
  // If the player won the game...
  if (playerScore == 10) {
    alert("You won!");
  } else { // If the computer won the game...
    alert("The computer won!");
  }

  // Refreshes window for next round.
  // window.location.reload();

  // Resets scores to zero.
  playerScore = 0;
  compScore = 0;

}

// Houses main game functionality.
function game(playerChoice) {
  // Initializes the choices.
  var computer = compChoice();
  var player = playerChoice;

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
  updateScore();

  if (compScore == 10 || playerScore == 10) {
    declareWinner();
  }

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
