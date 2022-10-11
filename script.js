addEventListener("submit", commentLimit);
addEventListener("input", commentLength);



function commentLimit(event) {
    let str = document.getElementById("comment").value;
    let style = document.getElementById("comment").style;
    let userInput = document.getElementById("user-comment");
    
    userInput.innerHTML = "Your comment: " + str;
    event.preventDefault();
    
    if (str.length > 140) {
        style.borderColor = "red";
    }
}

function commentLength() {
    let str = document.getElementById("comment").value;
    let charVal = document.getElementById("char-value");
    charVal.innerHTML = str.length + "/140";
}