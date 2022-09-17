const generateBtn = document.querySelector(".new-palette-btn");
const lockBtn = document.querySelectorAll(".lock-btn");
const color = document.querySelectorAll(".color");
const hex = document.querySelectorAll(".hex");

generateBtn.addEventListener("click", generateColors);

//lock button toggle
for (let i = 0; i < lockBtn.length; i++) {
  lockBtn[i].addEventListener("click", () => {
    lockBtn[i].classList.toggle("locked");
  });
}

function generateColors() {
  //check if color is locked, generate if not
  for (let i = 0; i < lockBtn.length; i++) {
    if (lockBtn[i].classList.contains("locked")) {
      continue;
    } else {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      color[i].style.backgroundColor = randomColor;
      hex[i].style.background = randomColor;
      hex[i].innerHTML = randomColor;
    }

    //animation
    color[i].classList.add("fade-in");
    hex[i].classList.add("fade-in");
    setTimeout(() => {
      color[i].classList.remove("fade-in");
      hex[i].classList.remove("fade-in");
    }, 400);

    console.log("color generated");
  }
}

generateColors();
