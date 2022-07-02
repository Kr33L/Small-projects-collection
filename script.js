addEventListener("submit", commentLimit);
document.getElementById("comment").addEventListener("input", commentLength)
function commentLimit(event) {
        let text;
        let style;
        text = document.getElementById("comment").value;
        style = document.getElementById("comment").style;
        if (text.length > 140) {
            event.preventDefault();
            style.borderColor = "red";
        }
}

function commentLength() {

}