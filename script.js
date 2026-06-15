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

  // Changed name to playRound to match your calls below
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Changed returns to console.logs so the text prints and the code keeps running
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win this round!");
    } else {
      computerScore++;
      console.log("Computer wins this round!");
    }

    // This will now successfully run because the return blocks were removed
    console.log(
      `Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`,
    );
  }

  

  if (humanScore > computerScore) {
    console.log("🏆 GAME OVER: Congratulations, you won the overall game!");
  } else if (computerScore > humanScore) {
    console.log("🤖 GAME OVER: The computer won the overall game!");
  } else {
    console.log("🤝 GAME OVER: The entire match is a draw!");
  }



