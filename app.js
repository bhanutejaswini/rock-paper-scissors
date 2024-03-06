const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const computerScore = document.getElementById("computer-score");
const userScore = document.getElementById("user-score");
const result = document.getElementById("result");
const choices = document.querySelectorAll(".user-choice");
console.log(choices);

let computerChoiceVal,
  userChoiceVal,
  computerScoreVal = 0,
  userScoreVal = 0;

const generateComputerChoice = () => {
  const choiceArray = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);

  return choiceArray[random];
};

const displayComputerChoice = () => {
  if (computerChoiceVal === "rock")
    computerChoice.innerHTML =
      '<i class="fa fa-solid fa-hand-back-fist fa-rotate-90"></i>';
  else if (computerChoiceVal === "paper")
    computerChoice.innerHTML = '<i class="fas fa-hand fa-rotate-90"></i>';
  else
    computerChoice.innerHTML =
      '<i class="fa fa-solid fa-hand-scissors fa-flip-horizontal"></i>';
};

const displayUserChoice = () => {
  if (userChoiceVal === "rock")
    userChoice.innerHTML = '<i class="fas fa-hand-back-fist rotate-flip"></i>';
  else if (userChoiceVal === "paper")
    userChoice.innerHTML =
      '<i class="fa fa-solid fa-hand fa-rotate-90 rotate-flip"></i>';
  else userChoice.innerHTML = '<i class="fa fa-solid fa-hand-scissors"></i>';
};

const win = () => {
  userScoreVal += 1;
  userScore.innerHTML = userScoreVal;
  computerScore.innerHTML = computerScoreVal;

  result.innerHTML = "You Win!";
};

const lose = () => {
  computerScoreVal += 1;
  userScore.innerHTML = userScoreVal;
  computerScore.innerHTML = computerScoreVal;

  result.innerHTML = "You Lose!";
};

const draw = () => {
  userScore.innerHTML = userScoreVal;
  computerScore.innerHTML = computerScoreVal;

  result.innerHTML = "It's a Draw!";
};

const displayResult = () => {
  // console.log(userChoiceVal + " " + computerChoiceVal);
  switch (userChoiceVal + " " + computerChoiceVal) {
    case "rock scissors":
    case "scissors paper":
    case "paper rock":
      win();
      break;
    case "scissors rock":
    case "paper scissors":
    case "rock paper":
      lose();
      break;
    default:
      draw();
  }
};

const display = () => {
  computerChoiceVal = generateComputerChoice();
  console.log(computerChoiceVal);
  displayComputerChoice();
  displayUserChoice();
  displayResult();
};

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoiceVal = e.currentTarget.id;
    console.log(e.target);

    display();
  })
);
