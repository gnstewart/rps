const playerSelection = parseInt(prompt("Rock, paper, scissors, shoot!")).toLowerCase;

let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else if (computerSelection <= 1) {
    computerSelection = "scissors"
}

console.log(computerSelection);

function playround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose!"
    } else {
        return "Why did you bring " + playerSelection + " to a rock, paper, scissors contest?";
    }
    }
    

