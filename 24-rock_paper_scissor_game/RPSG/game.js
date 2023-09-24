// Get DOM elements for turn container images
const computerImg = document.querySelector(".computer-turn img");
const playerImg = document.querySelector(".player-turn img");

// Get DOM elements for scoreboard labels
const playerScoreLabel = document.getElementById("player-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");

// Get DOM elements for weapon buttons
const weaponButtons = document.querySelectorAll(".weapons-container button");

// Function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// Function to update the scores and display choices
function updateGame(playerChoice, computerChoice, winner) {
  playerImg.src = `img/${playerChoice.toLowerCase()}Player.svg`;
  computerImg.src = `img/${computerChoice.toLowerCase()}Computer.svg`;

  let computerPoints = parseInt(computerScoreLabel.textContent);
  let playerPoints = parseInt(playerScoreLabel.textContent);
  let tiePoints = parseInt(tieScoreLabel.textContent);

  if (winner === "tie") {
    tieScoreLabel.textContent = tiePoints + 1;
  } else if (winner === "computer") {
    computerScoreLabel.textContent = computerPoints + 1;
  } else {
    playerScoreLabel.textContent = playerPoints + 1;
  }
}

// Function to handle the game logic when a button is clicked
function handleButtonClick(option) {
  computerImg.classList.add("shakeComputer");
  playerImg.classList.add("shakePlayer");

  setTimeout(() => {
    computerImg.classList.remove("shakeComputer");
    playerImg.classList.remove("shakePlayer");

    const playerChoice = option;
    const weaponOfChoice = ["Rock", "Paper", "Scissor"];
    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = weaponOfChoice[randomChoice];

    const winner = determineWinner(playerChoice, computerChoice);
    updateGame(playerChoice, computerChoice, winner);
  }, 900);
}

// Add event listeners to weapon buttons
weaponButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.textContent);
  });
});
