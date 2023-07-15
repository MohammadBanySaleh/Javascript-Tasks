var textArea = document.getElementById("textArea1");

var fontType = document.getElementById("fontType");
fontType.addEventListener("change", changeFontType);
function changeFontType() {
    var selectedFontType = fontType.value;
    if (selectedFontType == "sans-serif") {
        textArea.style.fontFamily = "sans-serif";
    }
    else if (selectedFontType == "cursive") {
        textArea.style.fontFamily = "cursive";
    }
    else {
        textArea.style.fontFamily = "system-ui";
    }
}

var fontSize = document.getElementById("fontSize");
fontSize.addEventListener("change", changeFontSize);
function changeFontSize() {
    var selectedFontSize = fontSize.value;
    if (selectedFontSize == "10px") {
        textArea.style.fontSize = "10px";
    }
    else if (selectedFontSize == "15px") {
        textArea.style.fontSize = "15px"
    }
    else if (selectedFontSize == "20px") {
        textArea.style.fontSize = "20px"
    }
    else {
        textArea.style.fontSize = "25px"
    }
}

var italicCheckBox = document.getElementById("italic");
var boldCheckBox = document.getElementById("bold");
var underlineCheckBox = document.getElementById("underline");

function checkBoxesFunction() {
    if (italicCheckBox.checked == true) {
        textArea.style.fontStyle = "italic";
    } else textArea.style.fontStyle = "normal";

    if (boldCheckBox.checked == true) {
        textArea.style.fontWeight = "bold";
    } else textArea.style.fontWeight = "normal";

    if (underlineCheckBox.checked == true) {
        textArea.style.textDecoration = "underline";
    } else textArea.style.textDecoration = "none";
}
