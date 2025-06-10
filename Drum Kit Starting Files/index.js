var btn = document.querySelectorAll("button");
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var buttonClick = this.innerHTML;
    makeSound(buttonClick);
    buttonAnimation(buttonClick);
  });
}

document.addEventListener("keypress", function (even) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log(buttonClick);
      break;
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000); // 3000 ms = 3 seconds
}
