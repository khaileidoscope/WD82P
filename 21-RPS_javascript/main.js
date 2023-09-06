//  Rock Paper Scissors Console Game
//  2 Players -> human and computer
//  3 Weapos -> rock, paper, scissors
//  rounds -> winner, loser

//  PLAN
//  Console Game
//  human input -> weapon of choice
//  computer input -> weapon of random choice
//  process
//  output -> winner
//  Pseudocode
//   1. Get input of human player using prompt method
//   2. Store the human input in a variable
//   3. Get weapon of computer player
//   4. Create a function that generates random weapon of choice for computer -> 'rock', 'paper', 'scissors'
//   5. Store the computer weapon in a variable
//   6. Create a function that takes two parameters, playerWeapon, computerWeapon
//   7. Process the weapons to find out the results.

//human
// let playerSelection = prompt(
//   "Type your weapon of choice: rock, paper, scissors"
// );
// let computerSelection = getComputerSelection();

//computer
function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"];

  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

//conditional
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

//function and loop best of 3 and result
function game() {
  for (let gameRound = 0; gameRound < 3; gameRound++) {
    playerSelection = prompt(
      "Type your weapon of choice: rock, paper, scissors"
    );
    computerSelection = getComputerSelection();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game(); //call function in case gagamitin
//result
// console.log(playRound(playerSelection, computerSelection));
