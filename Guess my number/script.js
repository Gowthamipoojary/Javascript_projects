"use strict ";

/*document.querySelector(".message").textContent ="Start to guessing the number...";
document.querySelector(".number").textContent = 20;
document.querySelector(".guess").value = 20;*/
let guessNumber = Math.trunc(Math.random() * 20) + 1;
//let score = 20;
let highscore = 0;
//typeof document.querySelector(".score").textContent;
//document.querySelector(".score").textContent = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayGuess = function (message) {
  document.querySelector(".guess").value = message;
};
const displayScore = function (message) {
  document.querySelector(".score").textContent = message;
};
const displayNumber = function (message) {
  document.querySelector(".number").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess);
  if (!guess) {
    // document.querySelector(".message").textContent ="You haven't entered number yet...";
    displayMessage("No number!");
    //when the guess is eaual to secreateNumber
  } else if (guess === guessNumber) {
    // document.querySelector(".message").textContent ="You have guessed correct number...";
    displayMessage("You have guessed correct number...");
    //document.querySelector(".number").textContent = guessNumber;
    displayNumber(guessNumber);
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when the guess is not equal to secreate number
  else if (guess != guessNumber) {
    let guessdata = guess > guessNumber ? "Too high number" : "Too low number";
    displayMessage(guessdata);
    score--;
    //document.querySelector(".score").textContent = score;
    displayScore(score);
  }
  console.log(score);
  if (score <= 0) {
    //   document.querySelector(".message").textContent = "You lost the game";
    displayMessage("You lost the game");
    // document.querySelector(".score").textContent = 0;
    displayScore(0);
  }

  /*else if (guess > guessNumber) {
    document.querySelector(".message").textContent =
      "You have guessed too high number...";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < guessNumber) {
    document.querySelector(".message").textContent =
      "You have guessed too low number...";
    score--;
    document.querySelector(".score").textContent = score;
  }*/
});
document.querySelector(".again").addEventListener("click", function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector(".score").textContent = score;
  displayScore(score);
  // document.querySelector(".number").textContent = "?";
  displayNumber("?");
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing the number...");
  // document.querySelector(".guess").value = "";
  displayGuess("");
  document.querySelector("body").style.backgroundColor = " #222";
});
