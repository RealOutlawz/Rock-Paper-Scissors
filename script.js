// Initialize computer and user scores to 0
let humanScore = 0;
let computerScore = 0;

// Get the computer's choice
function getComputerChoice() {
  let numGenerator = Math.floor(Math.random() * 100);
  if (numGenerator < 33) {
    return "Rock";
  } else if (numGenerator < 66) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

// Play a round and update scores
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  document.getElementById(
    "compSelection"
  ).textContent = `The computer picked ${computerChoice}`;
  document.getElementById(
    "userSelection"
  ).textContent = `You picked ${humanChoice}`;

  let roundWinner = "";

  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    roundWinner = "The computer won this round!";
    computerScore++;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundWinner = "You won this round!";
    humanScore++;
  } else {
    roundWinner = "Tied! No winners, try again!";
  }

  document.getElementById("roundWinner").textContent = roundWinner;
  document.getElementById("yourScoreValue").textContent = humanScore;
  document.getElementById("compScoreValue").textContent = computerScore;

  whoGetsGold();
}

// Check for winner and apply golden text to the winner's score
function whoGetsGold() {
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore >= 5) {
      document.getElementById("yourScoreValue").style.color = "gold";
      disableButtons();
    }
    if (computerScore >= 5) {
      document.getElementById("compScoreValue").style.color = "gold";
      disableButtons();
    }
    checkWinner();
  }
}
// Disables all buttons when the user or computer score hits 5
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Determine the overall winner
function checkWinner() {
  let overallWinner = "";

  if (humanScore > computerScore) {
    overallWinner = "You won!";
  } else if (humanScore < computerScore) {
    overallWinner = "You lost!";
  } else {
    overallWinner = "You and the computer tied!";
  }

  document.getElementById("overallWinner").textContent = overallWinner;
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("roundWinner").textContent = "";
  document.getElementById("yourScoreValue").textContent = "0";
  document.getElementById("compScoreValue").textContent = "0";
  document.getElementById("overallWinner").textContent = "";
  document.getElementById("compSelection").textContent = "";
  document.getElementById("userSelection").textContent = "";

  // Reset the score colors
  document.getElementById("yourScoreValue").style.color = "";
  document.getElementById("compScoreValue").style.color = "";
  // Turns the buttons back on
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

// Button functions, start the game
document.getElementById("rock").addEventListener("click", () => {
  playRound("Rock");
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("Paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("Scissors");
});

document.getElementById("reset").addEventListener("click", () => {
  resetGame();
});
