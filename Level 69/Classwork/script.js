const taskField = document.getElementById("taskField")
const sendBtn = document.getElementById("btn");
const tasksUl = document.getElementById("tasks");

sendBtn.onclick = function() {
    let newLi = document.createElement("li")
    newLi.textContent = taskField.value;
    tasksUl.appendChild(newLi)

    taskField.value = "";
}
