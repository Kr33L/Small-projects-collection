addEventListener("submit", commentLimit);
addEventListener("input", commentLength);

function commentLimit(event) {
    let str = document.getElementById("comment").value;
    let style = document.getElementById("comment").style;
    let userInput = document.getElementById("user-comment");
    
    if (str.length > 140) {
        event.preventDefault();
        style.borderColor = "red";
    }
    else (str.length <= 140); {
        event.preventDefault();
        userInput.innerHTML = "Your comment: " + str;
    }
}

function commentLength() {
    let str = document.getElementById("comment").value;
    let charVal = document.getElementById("char-value");
    charVal.innerHTML = str.length + "/140";
}