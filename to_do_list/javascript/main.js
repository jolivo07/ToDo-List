
 let navCompleteTask = document.getElementById("nav-complete-tasks")
 let navIncompleteTask = document.getElementById("nav-incomplete-task")
 let btnAddTask = document.getElementById("btn-add-tasks")
 let formNewTask = document.getElementById("form-new-tasks")
 let tableTaskComplete = document.getElementById("table-task-completed")
 let tableTaskIncomplete = document.getElementById("table-task-incomplete")
 let footerSelectTaskPreview = document.getElementById("footer-preview")
 let formEditTask = document.getElementById("form-edit-tasks")
 let footerInfoTask = document.getElementById("footer")
 let btnCreateTask = document.getElementById("btn-create-tasks")
 let btnCancelEdit = document.getElementById("btn-cancel-edit")
 let btnCancelNewTask = document.getElementById("btn-cancel-new-task")
 let btnModalDeleteTask = document.getElementById("btn-modal-delete-task")
 let btnEditTask =document.getElementById("btn-edit-task")

 navCompleteTask.disabled = true;
 navIncompleteTask.disabled = true;

function show(list){
    list.forEach(x => {
        x.classList.remove("d-none")
    });
}

function hide(){
    let arrayHide =[formNewTask,tableTaskIncomplete,formEditTask,footerInfoTask,tableTaskComplete,footerSelectTaskPreview,btnAddTask]
    arrayHide.forEach(x => {
        x.classList.add("d-none")
    });
}

function showCompleteTaskList(){
    navIncompleteTask.classList.remove("fw-bolder", "text-decoration-underline")
    navCompleteTask.classList.add("fw-bolder", "text-decoration-underline")
    hide()
    show([btnAddTask,tableTaskComplete,footerSelectTaskPreview])
}

function showIncompleteTaskList(){
    navIncompleteTask.classList.add("fw-bolder", "text-decoration-underline")
    navCompleteTask.classList.remove("fw-bolder", "text-decoration-underline")
    hide()
    show([btnAddTask,tableTaskIncomplete,footerSelectTaskPreview])
}

navIncompleteTask.addEventListener("click", showIncompleteTaskList)
navCompleteTask.addEventListener("click",showCompleteTaskList)

function Task(name, description, createdAt, finishedAt) {
    this.name = name
    this.description = description
    this.createdAt = createdAt
    this.finishedAt = finishedAt
}

var arrayObjectIncomplete = []
var arrayObjectCompleted = []

loadNumberOfIncompleteTask = () => {
    document.getElementById("cont-task-incomplete").innerHTML = `${arrayObjectIncomplete.length} Incomplete Tasks`
}


const showInfoTask = (event,array) => {
    let hiperText = event
    let taskRow = hiperText.closest("a").innerHTML
    let task = array.find(x => x.name == taskRow)
    hide()
    document.getElementById("footer-task-name").innerHTML = task.name
    document.getElementById("footer-task-description").innerHTML = task.description
    if (array == arrayObjectIncomplete) {
        document.getElementById("footer-task-date").innerHTML = "Tasks Not Completed"
        show([footerInfoTask,tableTaskIncomplete])

    } else {
        document.getElementById("footer-task-date").innerHTML = "Was Completed On " + task.finishedAt
        show([footerInfoTask,tableTaskComplete])
    }
    
    show([footerInfoTask])
}

var showNotTaskInTable = () => {
    if ((arrayObjectIncomplete.length) == 0) {
        document.getElementById("task-not-incpmlete").classList.remove("d-none")
    } else {
        document.getElementById("task-not-incpmlete").classList.add("d-none")
    }

    if ((arrayObjectCompleted.length) == 0) {
        document.getElementById("task-not-completed").classList.remove("d-none")
    } else {
        document.getElementById("task-not-completed").classList.add("d-none")
    }
}

const uncompleteTaskAddtableIncompleted = (event) => {
    let btnUncheck = event
    let taskRow = btnUncheck.closest(" tr ")
    let taskName = taskRow.querySelector(".text-decoration-none").innerHTML
    let task = arrayObjectCompleted.find(x => x.name == taskName)
    task.finishedAt="--"
    document.getElementById("table-tbody-incomplete").innerHTML += '<tr id="tr-' + task.name + '"> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted(this)" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td class="text-center text-primary "> <a onclick="showInfoTask(this, arrayObjectIncomplete)" class="text-decoration-none" href="#">' + task.name + '</a></td> <td class="text-center">' + task.createdAt + '</td> <td class="text-center">' + task.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit(this)" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(this,arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    arrayObjectIncomplete.push(task)
    deleteRowTable(taskRow)
    loadNumberOfIncompleteTask();
    showNotTaskInTable()
    console.log(arrayObjectCompleted);
    console.log(arrayObjectIncomplete);
    
}

const completeTaskAddTableCompleted = (event) => {
    let taskRow = event.closest(" tr ")
    let taskName =taskRow.querySelector(".text-decoration-none").innerHTML
    let task = arrayObjectIncomplete.find(x => x.name == taskName)
    task.finishedAt = moment().format('llll')
    document.getElementById("table-tbody-completed").innerHTML += '<tr id="tr-' + task.name + '"> <td class="text-center" ><button type="button" onclick="uncompleteTaskAddtableIncompleted(this)" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(this,arrayObjectCompleted)" class="text-decoration-none" href="#">' + task.name + '</a></td> <td class="text-center">' + task.createdAt + '</td> <td class="text-center">' + task.finishedAt + '</td> <td class="text-center"><button type="button" onclick="showModalDelete(this,arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    arrayObjectCompleted.push(task);
    deleteRowTable(taskRow);
    loadNumberOfIncompleteTask();
    showNotTaskInTable()
    console.log(arrayObjectCompleted);
    console.log(arrayObjectIncomplete);
}




