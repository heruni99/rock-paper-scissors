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