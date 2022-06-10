
const showTableIncompleteAddTaskIncomplete = () => {
    navIncompleteTask.classList.add("fw-bolder", "text-decoration-underline")
    navCompleteTask.classList.remove("fw-bolder", "text-decoration-underline")
    navCompleteTask.disabled = false;
    navIncompleteTask.disabled = false;
    show([btnAddTask,footerSelectTaskPreview])
    arrayObjectIncomplete.push(newTasks)
    loadNumberOfIncompleteTask()
    document.getElementById("table-tbody-incomplete").innerHTML += '<tr id="tr-' + newTasks.name + '"> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted(this)" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(this, arrayObjectIncomplete)" class="text-decoration-none" href="#">' + newTasks.name + '</a></td> <td class="text-center">' + newTasks.createdAt + '</td> <td class="text-center">' + newTasks.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit(this)" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(this,arrayObjectIncomplete)" data-bs-toggle="modal"  data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
    hide()
    showNotTaskInTable()
    console.log(arrayObjectIncomplete);
}

function addTask(){
        var taskEnter = document.getElementById("title-tasks").value
        var descriptionEnter = document.getElementById("description-tasks").value
    if (taskEnter.length == 0) {
        alert("please add a name to the task")
    } else if (arrayObjectIncomplete.find(x => x.name == taskEnter)|| arrayObjectCompleted.find(x => x.name == taskEnter)) {
        alert("this task already exists")
    }else {
        newTasks = new Task(taskEnter, descriptionEnter, moment().format('llll'), "--")
        showTableIncompleteAddTaskIncomplete()
        hide()
        show([tableTaskIncomplete,btnAddTask])

        
    }
}
function showNewTaskForm(){
    hide()
    show([formNewTask])
   
}
function hideNewTaskForm(){
    if (arrayObjectIncomplete.length >= 1) {
        navIncompleteTask.classList.add("fw-bolder", "text-decoration-underline")
        navCompleteTask.classList.remove("fw-bolder", "text-decoration-underline")
        hide()
        show([btnAddTask,tableTaskIncomplete])
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    } else {
        hide()
        show([btnAddTask])
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    }
}

btnCancelNewTask.addEventListener("click", hideNewTaskForm)
btnAddTask.addEventListener("click", showNewTaskForm)
btnCreateTask.addEventListener("click", addTask)