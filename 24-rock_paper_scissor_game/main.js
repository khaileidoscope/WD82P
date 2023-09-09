// Buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
// Scoreboard Labels
const userScoreLabel = document.getElementById("player-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");
// Turns Labels
const playerTurnLabel = document.getElementById("player-turn-label");
const computerTurnLabel = document.getElementById("computer-turn-label");

let userScore = 0;
let computerScore = 0;
let tieScore = 0;

// Weapon Selection
function playerRound(playerWeapon, computerWeapon) {
  if (playerWeapon == computerWeapon) {
    return "It's a tie!";
  } else if (
    (playerWeapon === "rock" && computerWeapon === "scissors") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissors" && computerWeapon === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// computer weapon selection
function getComputerWeapon() {
  const weapons = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}
// console.log(getComputerWeapon()); tester

// Player weapon selection
function gameHandler(playerWeapon) {
  const computerSelection = getComputerWeapon();
  const playerSelection = playerWeapon.toLowerCase();

  playerTurnLabel.textContent = playerSelection;
  computerTurnLabel.textContent = computerSelection;

  const result = playerRound(playerSelection, computerSelection);
  console.log(result);

  if (result === "You Win!") {
    userScore++;
    userScoreLabel.textContent = userScore;
  } else if (result === "You Lose!") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tieScore++;
    tieScoreLabel.textContent = tieScore;
  }
}

rockBtn.addEventListener("click", () => gameHandler(rockBtn.textContent));
paperBtn.addEventListener("click", () => gameHandler(paperBtn.textContent));
scissorBtn.addEventListener("click", () => gameHandler(scissorBtn.textContent));
