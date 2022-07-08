function toggleButton(btnArray, descArray) {
  const btnArray = [
    document.getElementById("btn-1"),
    document.getElementById("btn-2"),
    document.getElementById("btn-3"),
    document.getElementById("btn-4"),
  ];
  const descArray = [
    document.getElementById("card-description-1"),
    document.getElementById("card-description-2"),
    document.getElementById("card-description-3"),
    document.getElementById("card-description-4"),
  ];

  if (btnArray.click) {
    descArray.style.display = "block";
  }
}

toggleButton(btnArray[0], descArray[0]);
