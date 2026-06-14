function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
     } else if (randomNumber === 1) {
        return "paper";
     } else {
        return "scissor";   
    }
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper, or scissor?");
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
        return humanChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissor.");
        return getHumanChoice();
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playground( humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissor") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissor" && computerChoice === "paper")) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);