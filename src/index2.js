let taskList = document.getElementById('taskList');

function addTask() {
    let taskInput = document.getElementById('taskinput');
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    } else {
        return taskText;
    }

    let li = document.createElement('li')

    li.innerHTML = taskText;

    let editButton = document.createElement('button');


    editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'

    editButtononclick = function () {
    editTask(li)
    }


}


