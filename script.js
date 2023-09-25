const txt = document.querySelector("p");
const grant = document.getElementById("grant");
const comp = document.getElementById("computer");
const draw = document.getElementById("draw");
let grantScore = 0;
let compScore = 0;
let drawScore = 0;


function playRoundRock() {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "paper";
    } else if (computerSelection <= 1) {
        computerSelection = "scissors"
    }
    console.log(computerSelection)
if (computerSelection === "rock") {
    txt.textContent = "Draw!"
    drawScore++;
    draw.textContent = `Draw: ${drawScore}`;
} else if (computerSelection === "paper") {
    txt.textContent = "You lose."
    compScore++;
    comp.textContent = `Computer: ${compScore}`
} else {
    txt.textContent = "You win!"
    grantScore++;
    grant.textContent = `Grant: ${grantScore}`
}
}

function playRoundPaper() {
    let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else if (computerSelection <= 1) {
    computerSelection = "scissors"
}
console.log(computerSelection)
    if (computerSelection === "paper") {
        txt.textContent = "Draw!"
        drawScore++;
    draw.textContent = `Draw: ${drawScore}`
    } else if (computerSelection === "scissors") {
        txt.textContent = "You lose."
        compScore++;
        comp.textContent = `Computer: ${compScore}`
    } else {
        txt.textContent = "You win!"
        grantScore++;
        grant.textContent = `Grant: ${grantScore}`
    }
}

    function playRoundScissors() {
        let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else if (computerSelection <= 1) {
    computerSelection = "scissors"
}
console.log(computerSelection)
        if (computerSelection === "scissors") {
            txt.textContent = "Draw!"
            drawScore++;
    draw.textContent = `Draw: ${drawScore}`
        } else if (computerSelection === "rock") {
            txt.textContent = "You lose."
            compScore++;
            comp.textContent = `Computer: ${compScore}`
        } else {
            txt.textContent = "You win!"
            grantScore++;
            grant.textContent = `Grant: ${grantScore}`
        }
    }





