
const showTableIncompleteAddTaskIncomplete = () => {
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    completeTaskNav.disabled = false;
    incompleteTaskNav.disabled = false;
    show([addTaskButton,footerSelectTaskPreview])
    arrayObjectIncomplete.push(newTasks)
    loadNumberOfIncompleteTask()
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + newTasks.name + '</a></td> <td class="text-center">' + newTasks.createdAt + '</td> <td class="text-center">' + newTasks.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
    hide()
    showNotTaskInTable()
    console.log(arrayObjectIncomplete);
}

function addTask(){
    if (document.getElementById("title-tasks").value.length == 0) {
        alert("Add Title")
    } else {
        hide()
        show([tableTaskIncomplete])
        var taskEnter = document.getElementById("title-tasks").value
        var descriptionEnter = document.getElementById("description-tasks").value
        newTasks = new task(taskEnter, descriptionEnter, moment().format('llll'), "--")
        showTableIncompleteAddTaskIncomplete()
    }
}
function showNewTaskForm(){
    hide()
    show([taskNewForm])
    cont = 0;
}
function hideNewTaskForm(){
    if (arrayObjectIncomplete.length >= 1) {
        incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
        completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
        hide()
        show([addTaskButton,tableTaskIncomplete])
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    } else {
        hide()
        show([addTaskButton])
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    }
}

cancelNewButton.addEventListener("click", hideNewTaskForm)
addTaskButton.addEventListener("click", showNewTaskForm)
creatTaskButton.addEventListener("click", addTask)