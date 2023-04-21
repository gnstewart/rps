const select = document.querySelector('select');

let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else if (computerSelection <= 1) {
    computerSelection = "scissors"
}

console.log(computerSelection);

document.addEventListener("change", playRound);

function playRound(select, computerSelection) {
    
    const results = document.querySelector('p');
    const playerSelection = select.value; 
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You lose!"
    } else {
        results.textContent = "Draw!"
    }
}
    

