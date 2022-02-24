// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons
// you need a random selection function for your computer to pick a move each turn
// you need to update the display area to show your move for each turn
// you need a function for win/loss/tie scenarios
// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case

const rockHand = document.querySelector(".choice #rock");
const paperHand = document.querySelector(".choice #paper");
const scissorHand = document.querySelector(".choice #scissors");

const myChoice = document.querySelector(".move .human-move i");

const statement = document.querySelector(".heading p");

const myScore = document.querySelector(".scores h2:nth-of-type(1)");
const computerScore = document.querySelector(".scores h2:nth-of-type(2)");

const computerHandIcon = document.querySelector(".move .computer-move i");

const container = document.querySelector(".container");

const winContainer = document.querySelector(".win-modal");
const winMessage = document.querySelector(".win-modal div");
const loseContainer = document.querySelector(".lose-modal");
const loseMessage = document.querySelector(".lose-modal div");

const winPlayAgainButton = document.querySelector(".win-modal div button");
const losePlayAgainButton = document.querySelector(".lose-modal div button");

let myCount = 0;
let computerCount = 0;

rockHand.addEventListener("click", () => {
  myChoice.className = "fas fa-hand-rock fa-10x";
  myChoice.id = "rock";
  getComputerMove();
  if (computerHandIcon.id === "paper") {
    statement.textContent = "You lost, computer won!";
    statement.style.color = "red";
    computerCount++;
    computerScore.textContent = `Computer Score: ${computerCount}`;
  } else if (computerHandIcon.id === "rock") {
    statement.textContent = "It's a tie!";
    statement.style.color = "black";
  } else {
    statement.textContent = "You won!";
    statement.style.color = "green";
    myCount++;
    myScore.textContent = `Your Score: ${myCount}`;
  }
  if (myCount === 10) {
    winContainer.classList.add("win-container");
    winMessage.classList.add("win");
  } else if (computerCount === 10) {
    loseContainer.classList.add("lose-container");
    loseMessage.classList.add("lose");
  }
});

paperHand.addEventListener("click", () => {
  myChoice.className = "fas fa-hand-paper fa-10x";
  myChoice.id = "paper";
  getComputerMove();
  if (computerHandIcon.id === "paper") {
    statement.textContent = "It's a tie!";
    statement.style.color = "black";
  } else if (computerHandIcon.id === "rock") {
    statement.textContent = "You won!";
    statement.style.color = "green";
    myCount++;
    myScore.textContent = `Your Score: ${myCount}`;
  } else {
    statement.textContent = "You lost, computer won!";
    statement.style.color = "red";
    computerCount++;
    computerScore.textContent = `Computer Score: ${computerCount}`;
  }
  if (myCount === 10) {
    winContainer.classList.add("win-container");
    winMessage.classList.add("win");
  } else if (computerCount === 10) {
    loseContainer.classList.add("lose-container");
    loseMessage.classList.add("lose");
  }
});

scissorHand.addEventListener("click", () => {
  myChoice.className = "fas fa-hand-scissors fa-10x";
  myChoice.id = "scissors";
  getComputerMove();
  if (computerHandIcon.id === "paper") {
    statement.textContent = "You won!";
    statement.style.color = "green";
    myCount++;
    myScore.textContent = `Your Score: ${myCount}`;
  } else if (computerHandIcon.id === "rock") {
    statement.textContent = "You lost, computer won!";
    statement.style.color = "red";
    computerCount++;
    computerScore.textContent = `Computer Score: ${computerCount}`;
  } else {
    statement.textContent = "It's a tie!";
    statement.style.color = "black";
  }
  if (myCount === 10) {
    winContainer.classList.add("win-container");
    winMessage.classList.add("win");
  } else if (computerCount === 10) {
    loseContainer.classList.add("lose-container");
    loseMessage.classList.add("lose");
  }
});

function getComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerHandIcon.className = "fas fa-hand-paper fa-10x";
    computerHandIcon.id = "paper";
  } else if (randomNumber === 1) {
    computerHandIcon.className = "fas fa-hand-rock fa-10x";
    computerHandIcon.id = "rock";
  } else {
    computerHandIcon.className = "fas fa-hand-scissors fa-10x";
    computerHandIcon.id = "scissors";
  }
}

winPlayAgainButton.addEventListener("click", () => {
  window.location.reload();
});
losePlayAgainButton.addEventListener("click", () => {
  window.location.reload();
});
