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
    // animation
    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");
      // change images
      player.src = "./img/" + option.innerHTML + "Player.svg";
      // computer choice
      const weaponOfChoice = ["ROCK", "PAPER", "SCISSOR"];
      let randomChoice = Math.floor(Math.random() * 3);
      let computerChoice = weaponOfChoice[randomChoice];
      computer.src = "./img/" + computerChoice + "Computer.svg";

      let computerPoints = parseInt(computerScoreLabel.innerHTML);
      let playerPoints = parseInt(userScoreLabel.innerHTML);
      let tiePoints = parseInt(tieScoreLabel.innerHTML);

      // logic for game
      if (option.innerHTML === "ROCK") {
        if (computerChoice === "ROCK") {
          tieScoreLabel.innerHTML = tiePoints + 1;
        } else if (computerChoice === "PAPER") {
          computerScoreLabel.innerHTML = computerPoints + 1;
        } else {
          userScoreLabel.innerHTML = playerPoints + 1;
        }
      }
      if (option.innerHTML === "PAPER") {
        if (computerChoice === "PAPER") {
          tieScoreLabel.innerHTML = tiePoints + 1;
        } else if (computerChoice === "SCISSOR") {
          computerScoreLabel.innerHTML = computerPoints + 1;
        } else {
          userScoreLabel.innerHTML = playerPoints + 1;
        }
      }
      if (option.innerHTML === "SCISSOR") {
        if (computerChoice === "SCISSOR") {
          tieScoreLabel.innerHTML = tiePoints + 1;
        } else if (computerChoice === "ROCK") {
          computerScoreLabel.innerHTML = computerPoints + 1;
        } else {
          userScoreLabel.innerHTML = playerPoints + 1;
        }
      }
    }, 900);
  });
});
