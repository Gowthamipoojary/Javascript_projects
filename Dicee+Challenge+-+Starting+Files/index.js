var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var image1 = "./images/dice" + randomNumber1 + ".png";
var image2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

// player 1  and player2 both have the same value
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}
// player 1 wins
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins";
} //player 2 wins
else {
  document.querySelector("h1").textContent = "Player 2 Wins";
}
