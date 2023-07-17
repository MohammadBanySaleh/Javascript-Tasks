function getData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data.json', true);
    request.responseType = 'text';

    request.onload = function () {

        var dataObj = JSON.parse(this.responseText);
        myFunction(dataObj);
    }

    request.send();

    function myFunction(studentsObj) {
        const studentsTable = document.getElementById("studentsTable");

        for (let i = 0; i < studentsObj.length; i++) {

            const row = document.createElement("tr");
            studentsTable.appendChild(row);

            for (let j = 0; j < studentsObj.length; j++) {
                const cell = document.createElement("td");

                if (j == studentsObj.length - 1) {
                    const profileImage = document.createElement("img");
                    profileImage.setAttribute("src", studentsObj[i].Image);
                    profileImage.style.width = "75px";
                    cell.appendChild(profileImage);
                    row.appendChild(cell);
                } else {
                    cell.innerHTML = Object.values(studentsObj[i])[j];
                    row.appendChild(cell);
                }
            }
        }
    }

}