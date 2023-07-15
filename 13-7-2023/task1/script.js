const myText = document.getElementById("mainPara");

myText.addEventListener("mouseover",mouseOverFunction);
function mouseOverFunction() {
    myText.innerText = "Hello World!";
}

myText.addEventListener("mouseout",mouseOutFunction);
function mouseOutFunction() {
    myText.innerText = "Can I help you?";
}



