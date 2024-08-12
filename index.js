function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice;
  const validChoices = ["rock", "paper", "scissors"];

  do {
    humanChoice = prompt("Your choice: ").toLowerCase();

    if (!validChoices.includes(humanChoice))
      alert("Your choice is invalid! Enter rock, paper or scissors");
  } while (!validChoices.includes(humanChoice));

  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[computerChoice] === humanChoice) {
    return 1;
  } else if (winConditions[humanChoice] === computerChoice) {
    return 2;
  } else {
    return 0;
  }
}

function playGame() {
  const rounds = 5;
  let humanScore = 0,
    computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(computerChoice, humanChoice);

    const result = playRound(computerChoice, humanChoice);

    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    if (result === 1) {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (result === 2) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      console.log(`Its is a draw! You and computer selected ${humanChoice}`);
    }
  }

  console.log(`Final Score: Computer ${computerScore} - You ${humanScore}`);

  if (computerScore > humanScore) {
    console.log(`You lose!`);
  } else if (computerScore < humanScore) {
    console.log(`You win!`);
  } else {
    console.log(`Its is a draw!`);
  }
}

playGame();
