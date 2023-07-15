var countries = document.getElementById("countries");
countries.addEventListener("change",changeFlag);
function changeFlag() {
    var selectedCountry = countries.value;
    var urlFlag = document.getElementById("countryFlag");
    if (selectedCountry == 'Palestain') {
        urlFlag.setAttribute("src","./Palestine.jpg");
    }
    else if (selectedCountry == 'Lebanon') {
        urlFlag.setAttribute("src","./Lebanon.png");
    }
    else {
        urlFlag.setAttribute("src","./jordan.png");
    }
}

