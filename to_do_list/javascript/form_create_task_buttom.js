
const showTableIncompleteAddTaskIncomplete = () => {
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    button = completeTaskNav.disabled = false;
    button2 = incompleteTaskNav.disabled = false;
    show(addTaskButton)
    arrayObjectIncomplete.push(newTasks)
    loadNumberOfIncompleteTask()
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary prueba"> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + newTasks.name + '</a></td> <td class="text-center">' + newTasks.createdAt + '</td> <td class="text-center">' + newTasks.finishedAT + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
    show(footerSelectTaskPreview)
    hide(footerInfoTask)
    showNotTaskInTable()
    console.log(arrayObjectIncomplete);
}

function addTask(){
    if (document.getElementById("title-tasks").value.length == 0) {
        alert("Add Title")
    } else {
        hide(taskNewForm)
        show(tableTaskIncomplete)
        var taskEnter = document.getElementById("title-tasks").value
        var descriptionEnter = document.getElementById("description-tasks").value
        newTasks = new tasksCompleted(taskEnter, descriptionEnter, moment().format('llll'), "--")
        showTableIncompleteAddTaskIncomplete()
    }
}

creatTaskButton.addEventListener("click", addTask)