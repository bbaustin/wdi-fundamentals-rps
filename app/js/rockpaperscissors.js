////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}



function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    if (playerMove === computerMove){
    	winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
    	winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'paper'){
    	winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
    	winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
    	winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
    	winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
    	winner = 'computer'; }
      else {
      	winner = 'error'; }
    
    return winner;
}



function playToFive() {
   var playerWins = 0;
   var computerWins = 0;
   var playerMove;
   var computerMove;
   var winner;
   
   while (playerWins < 5 && computerWins < 5) {
   playerMove = getInput();
   computerMove = randomPlay();
   winner = getWinner(playerMove, computerMove)
   
   if (winner === "tie")  {
		console.log("Both players played " + playerMove + ". Score is PLAYER- " + playerWins + ", CPU " + computerWins + ".");
	} else if (winner === "player")  {
		playerWins += 1;
		console.log("Player played " + playerMove + " and CPU played " + computerMove + ". Player wins! Score is PLAYER- " + playerWins + ", CPU- " + computerWins + ". ");
	} else if (winner === "computer")  {
		computerWins += 1;
		console.log("Player played " + playerMove + " and CPU played " + computerMove + ". CPU wins! Score is PLAYER- " + playerWins + ", CPU- " + computerWins + ". " );
	}  else  {
		console.log("Please try again.");
		}
	}   
	
    
    return [playerWins, computerWins];
}

