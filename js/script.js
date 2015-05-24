"use strict";

$(document).ready(function() {
  var player,
      computer;

  var playerScore = 0,
      compScore = 0;

  var playerCards = document.getElementsByClassName("player-card");

  function game() {

    function playerChoice() {
      // Returns user's choice.
      var choice;

      $(playerCards).click(function() {
        choice = this.id;
      });

      return choice;
    }

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

    function updateScore(score) {
      return score++;
    }

    if(playerScore < 5 && compScore < 5) {

      var playerChoice,
          compChoice;

      $(playerCards).click(function() {
        playerChoice = playerChoice();
        compChoice = compChoice();

        if (playerChoice == "rock") { // First part of "if" block...

          if (compChoice == "rock") {
            // Tie! No points given.
          } else if (compChoice == "paper") {
            // Computer gets a point.
            updateScore(compScore);
          } else if (compChoice == "scissors") {
            // Player gets a point.
            updateScore(playerScore);
          }

        } else if (playerChoice == "paper") { // Second part of "if" block...

          if (compChoice == "rock") {
            // Player gets a point.
            updateScore(playerScore);
          } else if (compChoice == "paper") {
            // Tie! No points given.
          } else if (compChoice == "scissors") {
            // Computer gets a point.
            updateScore(compScore);
          }

        } else if (playerChoice == "scissors") { // Third part of "if" block...

          if (compChoice == "rock") {
            // Computer gets a point.
            updateScore(compScore);
          } else if (compChoice == "paper") {
            // Player gets a point.
            updateScore(playerScore);
          } else if (compChoice == "scissors") {
            // Tie! No points given.
          }

        }

        console.log("Player score: ", playerScore);
        console.log("Computer score: ", compScore);

      })

    }

  }

  game();

})
