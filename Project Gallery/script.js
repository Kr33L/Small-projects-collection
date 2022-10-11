function toggleDescription(event) {
  const button = document.getElementById(event.target.id);
  const mapDescId = `card-description-${event.target.id.slice(-1)}`;
  const descText = document.getElementById(mapDescId);

  if (!button) {
    alert("This is a button, a button without an id...")
  }

  descText.classList.toggle('hide');
}

const buttons = document.querySelectorAll(".toggle");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleDescription);
}