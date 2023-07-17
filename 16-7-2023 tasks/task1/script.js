function changeBackColor () {
    sessionStorage.setItem("selectedColor",document.getElementById("myColor").value);
    document.body.style.backgroundColor = sessionStorage.getItem("selectedColor");
}
document.body.style.backgroundColor = sessionStorage.getItem("selectedColor");
