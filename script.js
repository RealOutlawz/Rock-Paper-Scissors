//Initialize computer and users scores to 0
let humanScore = 0;
let computerScore = 0;

/*get the computers choice, use math.random to
    generate a number multiplied by 100 convert to a 
    whole number and divide them out by 3 for each choice. */
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

/* Get user choice and put them as argument to determine the winnner 
and update the scores. */
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

  let yourScore = document.getElementById("yourScore");
  let compScore = document.getElementById("compScore");

  document.getElementById("roundWinner").textContent = roundWinner;
  yourScore.textContent = `Your Score: ${humanScore}`;
  compScore.textContent = `Computer Score: ${computerScore}`;

  if (humanScore >= 5 || computerScore >= 5) {
    checkWinner();
  }
}

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

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("roundWinner").textContent = "";
  document.getElementById("yourScore").textContent = "Your Score: 0";
  document.getElementById("compScore").textContent = "Computer Score: 0";
  document.getElementById("overallWinner").textContent = "";
  document.getElementById("compSelection").textContent = "";
  document.getElementById("userSelection").textContent = "";
}

/*Button functions, starts the game*/
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
