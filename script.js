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



  let computerScore = 0;
  let humanScore = 0;

// 2. Select the HTML elements where we want to display results
const roundResultDiv = document.getElementById("round-result");
const runningScoreDiv = document.getElementById("running-score");
const gameWinnerDiv = document.getElementById("game-winner");

 // 3. Your playRound function, now sitting at the top level
function playRound(humanChoice, computerChoice) {
  // If someone already won, stop playing
  if (humanScore === 5 || computerScore === 5) return;

  humanChoice = humanChoice.toLowerCase();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update the UI text instead of using console.log
  roundResultDiv.textContent = resultMessage;
  runningScoreDiv.textContent = `Current Score -> You: ${humanScore} | Computer: ${computerScore}`;

  // Check if the game has an overall winner (First to 5)
  if (humanScore === 5) {
    gameWinnerDiv.textContent = "🏆 GAME OVER: Congratulations, you won the overall game!";
  } else if (computerScore === 5) {
    gameWinnerDiv.textContent = "🤖 GAME OVER: The computer won the overall game!";
  }
}

// 4. ADD EVENT LISTENERS: Connect your HTML buttons directly to the playRound function
document.getElementById("rock").addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});

document.getElementById("scissor").addEventListener("click", function() {
  playRound("scissor", getComputerChoice());
});