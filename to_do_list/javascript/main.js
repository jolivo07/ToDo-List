
 let completeTaskNav = document.getElementById("nav-tasks-completed")
 let incompleteTaskNav = document.getElementById("nav-tasks-incomplate")
 let addTaskButton = document.getElementById("add-tasks")
 let taskNewForm = document.getElementById("new-tasks")
 let tableTaskComplete = document.getElementById("table-task-completed")
 let tableTaskIncomplete = document.getElementById("table-task-incomplete")
 let footerSelectTaskPreview = document.getElementById("footer-preview")
 let editTask = document.getElementById("edit-tasks")
 let footerInfoTask = document.getElementById("footer")
 let creatTaskButton = document.getElementById("create-tasks")
 let cancelEditButton = document.getElementById("cancel-edit")
 let cancelNewButton = document.getElementById("cancel-new")
 let deleteTaskButton = document.getElementById("modal-delete")
 let editTaskButtom =document.getElementById("edit-tasks-buttom")

completeTaskNav.disabled = true;
incompleteTaskNav.disabled = true;

function show(list){
    list.forEach(x => {
        x.classList.remove("d-none")
    });
}

function hide(){
    let arrayHide =[taskNewForm,tableTaskIncomplete,editTask,footerInfoTask,tableTaskComplete,footerSelectTaskPreview,addTaskButton,addTaskButton]
    arrayHide.forEach(x => {
        x.classList.add("d-none")
    });
}

var cont = null
function showCompleteTaskList(){
    incompleteTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    hide()
    show([addTaskButton,tableTaskComplete,footerSelectTaskPreview])
    cont = null;
}

function showIncompleteTaskList(){
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    hide()
    show([addTaskButton,tableTaskIncomplete,footerSelectTaskPreview])
    cont = 0;
}

incompleteTaskNav.addEventListener("click", showIncompleteTaskList)
completeTaskNav.addEventListener("click",showCompleteTaskList)

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
        document.getElementById("not-incomplete-tasks").classList.remove("d-none")
    } else {
        document.getElementById("not-incomplete-tasks").classList.add("d-none")
    }

    if ((arrayObjectCompleted.length) == 0) {
        document.getElementById("not-completed-tasks").classList.remove("d-none")
    } else {
        document.getElementById("not-completed-tasks").classList.add("d-none")
    }
}

const uncompleteTaskAddtableIncompleted = () => {
    let pr = event.target
    let findPr = pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    let find = arrayObjectCompleted.find(x => x.name == findPr)
    TasksCompletedToIncomleted = new task(find.name, find.description, find.createdAt, "--")
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + find.name + '</a></td> <td class="text-center">' + find.createdAt + '</td> <td class="text-center">' + TasksCompletedToIncomleted.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
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
    document.getElementById("table-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncompleteTaskAddtableIncompleted()" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectCompleted)" class="text-decoration-none" href="#">' + newTasksCompleted.name + '</a></td> <td class="text-center">' + newTasksCompleted.createdAt + '</td> <td class="text-center">' + newTasksCompleted.finishedAt + '</td> <td class="text-center"><button type="button" onclick="showModalDelete(arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    loadNumberOfIncompleteTask();
    arrayObjectCompleted.push(newTasksCompleted);
    deleteRowTable(arrayObjectIncomplete);
    showNotTaskInTable()
}