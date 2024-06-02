let taskList = document.getElementById('taskList');

function addTask() {
    let taskInput = document.getElementById('taskinput');
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    let li = document.createElement('li')

    li.innerHTML = taskText;

    let editButton = document.createElement('button');


    editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'

    editButtononclick = function () {
        editTask(li)
    }

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'


    deleteButton.onclick = function () {
        deleteTask(li)

    }

    li.appendChild(editButton);
    li.appendChild(deleteButton);


    taskList.appendChild(li);
    taskInput.value = "";


}
function editTask() {
    let taskElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt("Modifier la tâche", taskText);

    if (newTaskText === null || newTaskText === "") {
        return;
    } else {
        return newTaskText;
    }

    taskTextElement.textContent = newTaskText;
}
