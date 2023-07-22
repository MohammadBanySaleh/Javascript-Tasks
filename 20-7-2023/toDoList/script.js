// document.addEventListener("DOMContentLoaded", function () {
//     displayTasks();
// });
document.addEventListener("DOMContentLoaded", function () {
    displayTasks();
});

if (localStorage.length == 0) {
    localStorage.setItem("myArray", '[]');
}

function addTask() {
    var tasksArray = JSON.parse(localStorage.getItem("myArray"));
    const taskDescriptionInput = document.getElementById("taskDesc");
    tasksArray.push(taskDescriptionInput.value);
    let strTasksArray = JSON.stringify(tasksArray);
    localStorage.setItem("myArray", strTasksArray);
    taskDescriptionInput.value = '';
    displayTasks();
}

// async function get() {
//     const response = await fetch(
//         `https://64bab65c5e0670a501d69138.mockapi.io/tasks`
//     );
//     const data = await response.json();
//     var myArray = JSON.parse(localStorage.getItem("myArray"));
//     for (let i = 0; i < data.length; i++) {
//         myArray.unshift(data[i].name);
//     }

//     localStorage.setItem("myArray", JSON.stringify(myArray));

//     displayTasks();
// }
// get();
function displayTasks() {
    
    const tasksContainer = document.getElementById("tasksContainer");
    var myArray = JSON.parse(localStorage.getItem("myArray"));

    tasksContainer.innerHTML = '';

    let searchText = document.getElementById("search").value;
    let searchedArray = myArray.filter(element => element.includes(searchText));

    for (let i = 0; i < searchedArray.length; i++) {

        const task = document.createElement("div");
        task.innerHTML = `
    <div id="taskTemolate" style="margin-left: 30px; margin-right: 30px; margin-top:20px; display: flex; flex-direction: row; justify-content: space-between; background-color: rgb(191, 227, 236); height: fit-content;">
        <span id="taskText" style="font-size: 20px;">${searchedArray[i]}</span>
        <button id="deleteBtn"; onclick="deleteTask(${i})"; style="background-color: red; color: white; border: none; font-size: 20px; margin-left: auto; margin-right: 10px;">Delete</button>
        <button id="updateBtn"; onclick="updateTask(${i})"; style="background-color: blue; color: white; border: none; font-size: 20px;">Update</button>
    </div>
    `
        tasksContainer.appendChild(task);
    }

}


function deleteTask(i) {
    let myArray = JSON.parse(localStorage.getItem("myArray"));
    if (i > -1) {
        myArray.splice(i, 1);
    }
    localStorage.setItem("myArray", JSON.stringify(myArray));
    displayTasks();
}

function updateTask(i) {
    let myArray = JSON.parse(localStorage.getItem("myArray"));
    let updatedTask = prompt("Enter new task description: ", myArray[i]);
    myArray[i] = updatedTask;
    localStorage.setItem("myArray", JSON.stringify(myArray));
    displayTasks();
}


