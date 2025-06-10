const body = document.querySelector("body");

function setColor(name) {
  body.style.backgroundColor = name;
}

document.querySelector(".green").addEventListener("click", function () {
  setColor("green");
});

document.querySelector(".red").addEventListener("click", function () {
  setColor("red");
});

document.querySelector(".blue").addEventListener("click", function () {
  setColor("blue");
});

document.querySelector(".random").addEventListener("click", function () {
  const colors = ["red", "green", "blue", "orange", "purple", "black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  setColor(randomColor);
});
