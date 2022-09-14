// get elements

const generateBtn = document.querySelector("button");
const lockBtn = document.querySelector(".lock");
const color = document.querySelectorAll(".color");
const hex = document.querySelectorAll(".hex");

generateBtn.addEventListener("click", generateColors);

function generateColors() {
  for (let i = 0; i < color.length; i++) {
    //generate random color and set background
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    color[i].style.background = "#" + randomColor;
    hex[i].style.background = "#" + randomColor;
    hex[i].innerHTML = randomColor;

    //animation
    color[i].classList.add("fade-in");
    hex[i].classList.add("fade-in");
    setTimeout(() => color[i].classList.remove("fade-in"), 500);
    setTimeout(() => hex[i].classList.remove("fade-in"), 500);

    console.log("log1: colors generated.");
  }
}

generateColors();
