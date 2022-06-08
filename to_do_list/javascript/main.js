
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

function task(name, description, createdAt, finishedAt) {
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


const showInfoTask = (array) => {
    let pr = event.target
    let finPr = pr.closest("a").innerHTML
    let findArray = array.find(x => x.name == finPr)
    hide()
    show([footerInfoTask])
    document.getElementById("footer-task-name").innerHTML = findArray.name
    document.getElementById("footer-task-description").innerHTML = findArray.description
    if (array == arrayObjectIncomplete) {
        document.getElementById("footer-task-date").innerHTML = "Tasks Not Completed"

    } else {
        document.getElementById("footer-task-date").innerHTML = "Was Completed On " + findArray.finishedAt
    }
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

const uncompleteTaskAddtableIncompleted = () => {
    let pr = event.target
    let findPr = pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    let find = arrayObjectCompleted.find(x => x.name == findPr)
    TasksCompletedToIncomleted = new task(find.name, find.description, find.createdAt, "--")
    document.getElementById("table-tbody-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + find.name + '</a></td> <td class="text-center">' + find.createdAt + '</td> <td class="text-center">' + TasksCompletedToIncomleted.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    arrayObjectIncomplete.push(TasksCompletedToIncomleted)
    console.log(arrayObjectCompleted)
    deleteRowTable(arrayObjectCompleted)
    loadNumberOfIncompleteTask();
    showNotTaskInTable()
}

const completeTaskAddTableCompleted = () => {
    let pr = event.target
    let findPr =pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    let find = arrayObjectIncomplete.find(x => x.name == findPr)
    let newTasksCompleted = new task(find.name, find.description, find.createdAt, moment().format('llll'))
    document.getElementById("table-tbody-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncompleteTaskAddtableIncompleted()" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectCompleted)" class="text-decoration-none" href="#">' + newTasksCompleted.name + '</a></td> <td class="text-center">' + newTasksCompleted.createdAt + '</td> <td class="text-center">' + newTasksCompleted.finishedAt + '</td> <td class="text-center"><button type="button" onclick="showModalDelete(arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    loadNumberOfIncompleteTask();
    arrayObjectCompleted.push(newTasksCompleted);
    deleteRowTable(arrayObjectIncomplete);
    showNotTaskInTable()
}