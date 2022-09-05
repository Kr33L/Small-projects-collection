// get elements

const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

// button click event

btn.addEventListener('click', generateColors);

function generateColors() {
  for(let i = 0; i < color.length; i++) {
    //generate random color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //add colour as background
    color[i].style.background = "#" + randomColor;
    //add animation
    color[i].classList.add('fade-in');
    setTimeout( () => color[i].classList.remove('fade-in'), 400);
    //add hex code above color
    hex[i].innerHTML = randomColor;
    console.log("func generateColors() triggered")
  }
}

//generate on page load
generateColors();