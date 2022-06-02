    document.getElementById("nav-tasks-completed").disabled = true;
    document.getElementById("nav-tasks-incomplate").disabled = true;
    document.getElementById("nav-tasks-completed").addEventListener("click", () => {
    document.getElementById("nav-tasks-incomplate").classList.remove("fw-bolder" , "text-decoration-underline")
    document.getElementById("nav-tasks-completed").classList.add("fw-bolder" , "text-decoration-underline")
    document.getElementById("add-tasks").classList.remove("d-none")
    document.getElementById("new-tasks").classList.add("d-none")
    document.getElementById("table-task-completed").classList.remove("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("footer-preview").classList.remove("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
    document.getElementById("footer").classList.add("d-none")
    cont = null;
})

document.getElementById("nav-tasks-incomplate").addEventListener("click", () => {
    document.getElementById("add-tasks").classList.remove("d-none")
    document.getElementById("new-tasks").classList.add("d-none")
    document.getElementById("nav-tasks-incomplate").classList.add("fw-bolder" , "text-decoration-underline")
    document.getElementById("nav-tasks-completed").classList.remove("fw-bolder" , "text-decoration-underline")
    document.getElementById("table-task-completed").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
    document.getElementById("footer-preview").classList.remove("d-none")
    document.getElementById("footer").classList.add("d-none")
    cont = 0;
})

document.getElementById("add-tasks").addEventListener("click", () => {
    document.getElementById("new-tasks").classList.remove("d-none")
    document.getElementById("add-tasks").classList.add("d-none")
    document.getElementById("table-task-completed").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
    document.getElementById("footer").classList.add("d-none")
    document.getElementById("footer-preview").classList.add("d-none")
    cont = 0;
})

var cont = null
function tasksIncomplete(tasks, description, createdAt, finishedAT) {
    this.tasks = tasks;
    this.description = description;
    this.createdAt = createdAt;
    this.finishedAT = finishedAT;
}

function tasksCompleted(tasks, description, createdAt, finishedAT) {
    this.tasks = tasks
    this.description = description
    this.createdAt = createdAt
    this.finishedAT = finishedAT
}

var arrayObjectIncomplete = []
var arrayObjectCompleted = []

var notTasks = (a,b) =>{
    if((a.length)==0){
        document.getElementById(b).classList.remove("d-none")
    }else{
        document.getElementById(b).classList.add("d-none")
    }
}

contIncompleteTasks = () => {
    document.getElementById("cont-task-incomplete").innerHTML = `${arrayObjectIncomplete.length} Incomplete Tasks`
}

document.getElementById("create-tasks").addEventListener("click", () => {
    if(document.getElementById("title-tasks").value.length == 0){
        alert("Add Title")
    }else{
        document.getElementById("new-tasks").classList.add("d-none")
        document.getElementById("table-task-incomplete").classList.remove("d-none")
        var taskEnter = document.getElementById("title-tasks").value
        var descriptionEnter = document.getElementById("description-tasks").value
        newTasks = new tasksIncomplete(taskEnter, descriptionEnter, moment().format('llll'), "--")
        addTask()
    }
})

const addTask = () => {
    document.getElementById("nav-tasks-incomplate").classList.add("fw-bolder" , "text-decoration-underline")
    document.getElementById("nav-tasks-completed").classList.remove("fw-bolder" , "text-decoration-underline")
    button =document.getElementById("nav-tasks-completed").disabled = false;
    button2 =document.getElementById("nav-tasks-incomplate").disabled = false;
    document.getElementById("add-tasks").classList.remove("d-none")
    arrayObjectIncomplete.push(newTasks)
    contIncompleteTasks()
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="check()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary prueba"> <a onclick="infoTasks(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + newTasks.tasks + '</a></td> <td class="text-center">' + newTasks.createdAt + '</td> <td class="text-center">' + newTasks.finishedAT + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="selectModal(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
    document.getElementById("footer-preview").classList.remove("d-none")
    document.getElementById("footer").classList.add("d-none")
    notTasks(arrayObjectCompleted,"not-completed-tasks")
    notTasks(arrayObjectIncomplete,"not-incomplete-tasks")
    console.log(arrayObjectIncomplete);
}

const check = () => {


    let pr = event.target
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    let find = arrayObjectIncomplete.find(x => x.tasks == finPr)
    let newTasksCompleted = new tasksCompleted(find.tasks, find.description, find.createdAt,moment().format('llll'))
    document.getElementById("table-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncheck()" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary prueba"> <a onclick="infoTasks(arrayObjectCompleted)" class="text-decoration-none" href="#">' + newTasksCompleted.tasks + '</a></td> <td class="text-center">' + newTasksCompleted.createdAt + '</td> <td class="text-center">' + newTasksCompleted.finishedAT + '</td> <td class="text-center"><button type="button" onclick="selectModal(arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    contIncompleteTasks();
    arrayObjectCompleted.push(newTasksCompleted);
    console.log(arrayObjectCompleted);
    deleted(arrayObjectIncomplete);
    notTasks(arrayObjectCompleted,"not-completed-tasks")
    notTasks(arrayObjectIncomplete,"not-incomplete-tasks")
}

const uncheck = () => {

    let pr = event.target
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    let find = arrayObjectCompleted.find(x => x.tasks == finPr)
    TasksCompletedToIncomleted = new tasksCompleted(find.tasks, find.description, find.createdAt, "--")
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="check()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary prueba"> <a onclick="infoTasks(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + find.tasks + '</a></td> <td class="text-center">' + find.createdAt + '</td> <td class="text-center">' + TasksCompletedToIncomleted.finishedAT + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="selectModal(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    arrayObjectIncomplete.push(TasksCompletedToIncomleted)
    console.log(arrayObjectCompleted)
    deleted(arrayObjectCompleted)
    contIncompleteTasks();
    notTasks(arrayObjectCompleted,"not-completed-tasks")
    notTasks(arrayObjectIncomplete,"not-incomplete-tasks")
}

document.getElementById("cancel-edit").addEventListener("click",()=>{
document.getElementById("add-tasks").classList.remove("d-none")
document.getElementById("edit-tasks").classList.add("d-none")
document.getElementById("table-task-incomplete").classList.remove("d-none")
document.getElementById("nav-tasks-incomplate").classList.add("fw-bolder" , "text-decoration-underline")
document.getElementById("nav-tasks-completed").classList.remove("fw-bolder" , "text-decoration-underline")
})


document.getElementById("cancel-new").addEventListener("click", ()=>{
   if(arrayObjectIncomplete.length>=1){
    document.getElementById("nav-tasks-incomplate").classList.add("fw-bolder" , "text-decoration-underline")
    document.getElementById("nav-tasks-completed").classList.remove("fw-bolder" , "text-decoration-underline")
    document.getElementById("add-tasks").classList.remove("d-none")
    document.getElementById("new-tasks").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
   }else{
    document.getElementById("add-tasks").classList.remove("d-none")
    document.getElementById("new-tasks").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
   }



})
const deleted = (array) => {
    let pr = event.target
    pr.closest(" tr ").remove()
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    let findModal = array.find(x => x.tasks == finPr)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.tasks == findModal.tasks) {
            array.splice(index, 1)
        }
    }
    console.log(arrayObjectIncomplete);
    contIncompleteTasks()
    notTasks(arrayObjectCompleted,"not-completed-tasks")
    notTasks(arrayObjectIncomplete,"not-incomplete-tasks")
}

document.getElementById("modal-delete").addEventListener("click", () => {
    deleteListModal.remove()
    if (cont == null) {
        forDelete(arrayObjectCompleted)
    } else (
        forDelete(arrayObjectIncomplete)
    )
    console.log(arrayObjectCompleted);
    console.log(arrayObjectIncomplete);
    contIncompleteTasks()
    notTasks(arrayObjectCompleted,"not-completed-tasks")
    notTasks(arrayObjectIncomplete,"not-incomplete-tasks")
})

const selectModal = (array) => {
    let pr = event.target
    deleteListModal = pr.closest("tr")
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    findModal = array.find(x => x.tasks == finPr)
}

const edit = () => {
    document.getElementById("add-tasks").classList.add("d-none")
    document.getElementById("footer-preview").classList.add("d-none")
    document.getElementById("footer").classList.add("d-none")
    document.getElementById("edit-tasks").classList.remove("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("table-task-completed").classList.add("d-none")
    let pr = event.target
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    findTasks = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
    findEdit = arrayObjectIncomplete.find(x => x.tasks == finPr)
    document.getElementById("edit-title").value = findEdit.tasks
    document.getElementById("edit-description").value = findEdit.description

}

const forDelete = x => {
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        if (element.tasks == findModal.tasks) {
            x.splice(index, 1)
        }
    }
}

document.getElementById("edit-tasks-buttom").addEventListener("click", () => {
    if(document.getElementById("edit-title").value.length == 0){
        alert("Add Title Task")
    }else{
        document.getElementById("add-tasks").classList.remove("d-none")
    document.getElementById("footer-preview").classList.remove("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    findEdit.tasks = document.getElementById("edit-title").value;
    findEdit.description = document.getElementById("edit-description").value;
    findTasks.innerHTML = document.getElementById("edit-title").value
    console.log(arrayObjectIncomplete);
    }
})

const infoTasks = (array) => {

    let pr = event.target
    let finPr = pr.closest("a").innerHTML
    let findArray = array.find(x => x.tasks == finPr)
    document.getElementById("footer").classList.remove("d-none")
    document.getElementById("footer-preview").classList.add("d-none")
    document.getElementById("footer-task-name").innerHTML = findArray.tasks
    document.getElementById("footer-task-description").innerHTML = findArray.description
    if(array == arrayObjectIncomplete){
        document.getElementById("footer-task-date").innerHTML = "Tasks Not Completed"

    }else{
        document.getElementById("footer-task-date").innerHTML = "Was Completed On " + findArray.finishedAT
    } 

}