let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else if (computerSelection <= 1) {
    computerSelection = "scissors"
}

let playerSelection = prompt("rock, paper, or scissors?");

console.log(computerSelection);
console.log(playerSelection);


document.addEventListener("click", playRound);
function playRound() {
    let results = document.querySelector('p');
    if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You lose!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = "You lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You lose!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results.textContent = "Draw!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        results.textContent = "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        results.textContent = "Draw!";
    }
}
    

