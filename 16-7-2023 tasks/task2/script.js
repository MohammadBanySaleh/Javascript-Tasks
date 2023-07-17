function showData() {
    let inputs = document.querySelectorAll(".formInput");
    let names = [];
    for (let i = 0; i < inputs.length; i++) {
        names.push(inputs[i].getAttribute("name"))
    }

    var inputObject = {};
    for (let i = 0; i < names.length; i++) {
        inputObject[names[i]] = inputs[i].value;
    }

    let checkboxes = document.querySelectorAll('input[name="language"]:checked');
    let checkedLanguages = [];
    checkboxes.forEach((checkbox) => {
        checkedLanguages.push(checkbox.value);
    });
    inputObject.languagesPr = checkedLanguages;

    let myString = JSON.stringify(inputObject);
    localStorage.setItem("formData", myString);

}
document.getElementById("cardsContainer").style.display = "flex";
let formDataObject = JSON.parse(localStorage.getItem("formData"));

// card1 
const inputName = document.createElement("p");
inputName.innerHTML = formDataObject["Name"];

const inputAge = document.createElement("p");
inputAge.innerHTML = formDataObject["Age"];

const inputGender = document.createElement("p");
inputGender.innerHTML = formDataObject["Gender"];

const inputBirthDate = document.createElement("p");
inputBirthDate.innerHTML = formDataObject["BirthDate"];

document.getElementById("card1").appendChild(inputName);
document.getElementById("card1").appendChild(inputAge);
document.getElementById("card1").appendChild(inputGender);
document.getElementById("card1").appendChild(inputBirthDate);

// card2 

const inputDescription = document.createElement("p");
inputDescription.innerHTML = formDataObject["Description"];

const inputEducation = document.createElement("p");
inputEducation.innerHTML = formDataObject["Education"];

const inputLanguages = document.createElement("p");
inputLanguages.innerHTML = formDataObject["languagesPr"];

document.getElementById("card2").appendChild(inputDescription);
document.getElementById("card2").appendChild(inputEducation);
document.getElementById("card2").appendChild(inputLanguages);

// card 3

const inputSiblingsNumber = document.createElement("p");
inputSiblingsNumber.innerHTML = formDataObject["SiblingsNumber"];

const inputSiblingsDescription = document.createElement("p");
inputSiblingsDescription.innerHTML = formDataObject["SiblingsDescription"];


document.getElementById("card3").appendChild(inputSiblingsNumber);
document.getElementById("card3").appendChild(inputSiblingsDescription);