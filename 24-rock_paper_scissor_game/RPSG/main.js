// create variables on turn container images
const computer = document.querySelector(".computer-turn img");
const player = document.querySelector(".player-turn img");

//create variables on scoreboard labels
const userScoreLabel = document.getElementById("player-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");

//create variable on button
const weaponButtons = document.querySelectorAll(".weapons-container button");

// loop for buttons using foreach loop
weaponButtons.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "./img/" + option.innerHTML + "Player.svg";

      const weaponOfChoice = ["ROCK", "PAPER", "SCISSOR"];
      let randomChoice = Math.floor(Math.random() * 3);
      let computerChoice = weaponOfChoice[randomChoice];
      computer.src = "./img/" + computerChoice + "Computer.svg";
    }, 900);
  });
});
