const buttons = document.querySelectorAll("button");
const headingEle = document.querySelector("h3");
const humanChoiceEle = document.querySelector(".human-choice");
const humanScoreEle = document.querySelector(".human-score");
const computerChoiceEle = document.querySelector(".computer-choice");
const computerScoreEle = document.querySelector(".computer-score");

let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
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

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanChoiceEle.textContent = "";
  computerChoiceEle.textContent = "";
  humanScoreEle.textContent = "Player: 0";
  computerScoreEle.textContent = "Computer: 0";
  headingEle.textContent = "First player to score 5 points wins!!";
}

function playGame(humanChoice) {
  let computerChoice = getComputerChoice();

  const result = playRound(computerChoice, humanChoice);

  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
  computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);

  humanChoiceEle.textContent = humanChoice;
  computerChoiceEle.textContent = computerChoice;

  if (result === 1) {
    computerScore++;

    computerScoreEle.textContent = `Computer: ${computerScore}`;
    headingEle.textContent = `${humanChoice} is beaten by ${computerChoice}`;
  } else if (result === 2) {
    humanScore++;

    humanScoreEle.textContent = `Player: ${humanScore}`;
    headingEle.textContent = `${humanChoice} beats ${computerChoice}`;
  } else {
    headingEle.textContent = `You and computer selected ${humanChoice}`;
  }

  if (computerScore === 5) {
    headingEle.textContent = `You lose! Game will be reset.`;
    setTimeout(resetGame, 5000);
  } else if (humanScore === 5) {
    headingEle.textContent = `You win! Game will be reset.`;
    setTimeout(resetGame, 5000);
  }
}

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    playGame(e.target.id);
  });
}
