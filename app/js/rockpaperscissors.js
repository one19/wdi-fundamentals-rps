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
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {
    	winner = 'tie';
    } else if (playerMove == 'rock' && computerMove == 'paper') {
		winner = 'computer';    
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
		winner = 'player';    
    } else if (playerMove == 'paper' && computerMove == 'rock') {
		winner = 'player';    
    } else if (playerMove == 'paper' && computerMove == 'scissors') {
		winner = 'computer';
    } else if (playerMove == 'scissors' && computerMove == 'rock') {
		winner = 'computer';    
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
		winner = 'player'    
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = null;
    var computerMove = null;
    while (playerWins < 5 && computerWins < 5) {
        playerMove=getPlayerMove();
        computerMove=getComputerMove();
        if (getWinner(playerMove, computerMove) == 'player') {
    	   playerWins +=1
        } else if (getWinner(playerMove, computerMove) == 'computer') {
    	   computerWins +=1
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        if (playerWins == 5) {
            return 'Player Wins!'
        } else if (computerWins == 5) {
            return 'Computer Wins!'
        }
    }
}

//play to x function, input the number of wins necissary to end loop
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = null;
    var computerMove = null;
    while (playerWins < x && computerWins < x) {
        playerMove=getPlayerMove();
        computerMove=getComputerMove();
        if (getWinner(playerMove, computerMove) == 'player') {
    	   playerWins +=1
        } else if (getWinner(playerMove, computerMove) == 'computer') {
    	   computerWins +=1
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        if (playerWins == x) {
            return 'Player Wins!'
        } else if (computerWins == x) {
            return 'Computer Wins!'
        }
    }
}