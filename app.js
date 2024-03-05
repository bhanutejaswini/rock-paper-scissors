const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll("button");

let computerChoiceVal, userChoiceVal;

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoiceVal = e.target.id;

    generateComputerChoice();
    displayComputerChoice();
    displayUserChoice();
    displayResult();
  })
);

const generateComputerChoice = () => {
  const random = Math.floor(Math.random() * 3 + 1);

  if (random === 1) computerChoiceVal = "rock";
  else if (random === 2) computerChoiceVal = "paper";
  else computerChoiceVal = "scissors";
};

const displayComputerChoice = () => {
  console.log(computerChoiceVal);
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

const displayResult = () => {
  if (computerChoiceVal === userChoiceVal) result.innerHTML = "It's a Draw!!";
  else if (computerChoiceVal === "rock") {
    if (userChoiceVal == "paper") {
      result.innerHTML = "You Win!";
    } else {
      result.innerHTML = "You Lose!";
    }
  } else if (computerChoiceVal === "paper") {
    if (userChoiceVal == "scissors") {
      result.innerHTML = "You Win!";
    } else {
      result.innerHTML = "You Lose!";
    }
  } else {
    if (userChoiceVal == "rock") {
      result.innerHTML = "You Win!";
    } else {
      result.innerHTML = "You Lose!";
    }
  }
};
