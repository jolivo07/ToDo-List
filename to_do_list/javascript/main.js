
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


let arrayHide =[taskNewForm,tableTaskIncomplete,editTask,footerInfoTask,tableTaskComplete,footerSelectTaskPreview,addTaskButton,addTaskButton]
function show(list){
    list.forEach(x => {
        x.classList.remove("d-none")
    });
   
}

function hide(){
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
    // show(addTaskButton)
    // show(tableTaskComplete)
    // show(footerSelectTaskPreview)
    
    cont = null;
}



function showIncompleteTaskList(){
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    hide()
    show([addTaskButton,tableTaskIncomplete,footerSelectTaskPreview])
    // show(addTaskButton)
    
    // show(tableTaskIncomplete)
    
    // show(footerSelectTaskPreview)
    
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




// function showNewTaskForm(){
//     show(taskNewForm)
//     hide(addTaskButton)
//     hide(tableTaskComplete)
//     hide(tableTaskIncomplete)
//     hide(editTask)
//     hide(footerInfoTask)
//     hide(footerSelectTaskPreview)
//     cont = 0;

// }


// const travelArrayDeleteSplice = x => {
//     for (let index = 0; index < x.length; index++) {
//         const element = x[index];
//         if (element.name == findModal.name) {
//             x.splice(index, 1)
//         }
//     }
// }

// function hideNewTaskForm(){
//     if (arrayObjectIncomplete.length >= 1) {
//         incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
//         completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
//         show(addTaskButton)
//         hide(taskNewForm)
//         show(tableTaskIncomplete)
//         document.getElementById("title-tasks").value = ""
//         document.getElementById("description-tasks").value = ""
//     } else {
//         show(addTaskButton)
//         hide(taskNewForm)
//         hide(tableTaskIncomplete)
//         document.getElementById("title-tasks").value = ""
//         document.getElementById("description-tasks").value = ""
//     }
// }



// function showEditTaskForm(){
//     if (document.getElementById("edit-title").value.length == 0) {
//         alert("Add Title Task")
//     } else {
//         show(addTaskButton)bbbb
//         show(footerSelectTaskPreview)
//         hide(editTask)
//         show(tableTaskIncomplete)
//         findEdit.name = document.getElementById("edit-title").value;
//         findEdit.description = document.getElementById("edit-description").value;
//         findTasks.innerHTML = document.getElementById("edit-title").value
//         console.log(arrayObjectIncomplete);
//     }
// }

// function hideEditTaskForm(){
//     show(addTaskButton)
//     hide(editTask)
//     show(tableTaskIncomplete)
//     incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
//     completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
// }

// function showCompleteTaskList(){
//     incompleteTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
//     completeTaskNav.classList.add("fw-bolder", "text-decoration-underline")
//     show(addTaskButton)
//     hide(taskNewForm)
//     show(tableTaskComplete)
//     hide(tableTaskIncomplete)
//     show(footerSelectTaskPreview)
//     hide(editTask)
//     hide(footerInfoTask)
//     cont = null;
// }


// function showIncompleteTaskList(){
//     incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
//     completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
//     show(addTaskButton)
//     hide(taskNewForm)
//     hide(tableTaskComplete)
//     show(tableTaskIncomplete)
//     hide(editTask)
//     show(footerSelectTaskPreview)
//     hide(footerInfoTask)
//     cont = 0;

// }


// function addTask(){
//     if (document.getElementById("title-tasks").value.length == 0) {
//         alert("Add Title")
//     } else {
//         hide(taskNewForm)
//         show(tableTaskIncomplete)
//         var taskEnter = document.getElementById("title-tasks").value
//         var descriptionEnter = document.getElementById("description-tasks").value
//         newTasks = new task(taskEnter, descriptionEnter, moment().format('llll'), "--")
//         showTableIncompleteAddTaskIncomplete()
//     }
// }

// function deleteTask(){
//     deleteListModal.remove()
//     if (cont == null) {
//         travelArrayDeleteSplice(arrayObjectCompleted)
//     } else (
//         travelArrayDeleteSplice(arrayObjectIncomplete)
//     )
//     console.log(arrayObjectCompleted);
//     console.log(arrayObjectIncomplete);
//     loadNumberOfIncompleteTask()
//     showNotTaskInTable()
// }



// completeTaskNav.addEventListener("click",showCompleteTaskList)

// incompleteTaskNav.addEventListener("click", showIncompleteTaskList)

// addTaskButton.addEventListener("click", showNewTaskForm)





// creatTaskButton.addEventListener("click", addTask)

// const showTableIncompleteAddTaskIncomplete = () => {
//     incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
//     completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
//     button = completeTaskNav.disabled = false;
//     button2 = incompleteTaskNav.disabled = false;
//     show(addTaskButton)
//     arrayObjectIncomplete.push(newTasks)
//     loadNumberOfIncompleteTask()
//     document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + newTasks.name + '</a></td> <td class="text-center">' + newTasks.createdAt + '</td> <td class="text-center">' + newTasks.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
//     document.getElementById("title-tasks").value = ""
//     document.getElementById("description-tasks").value = ""
//     show(footerSelectTaskPreview)
//     hide(footerInfoTask)
//     showNotTaskInTable()
//     console.log(arrayObjectIncomplete);
// }

// const completeTaskAddTableCompleted = () => {
//     let pr = event.target
//     let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
//     let find = arrayObjectIncomplete.find(x => x.name == finPr)
//     let newTasksCompleted = new task(find.name, find.description, find.createdAt, moment().format('llll'))
//     document.getElementById("table-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncompleteTaskAddtableIncompleted()" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectCompleted)" class="text-decoration-none" href="#">' + newTasksCompleted.name + '</a></td> <td class="text-center">' + newTasksCompleted.createdAt + '</td> <td class="text-center">' + newTasksCompleted.finishedAt + '</td> <td class="text-center"><button type="button" onclick="showModalDelete(arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
//     loadNumberOfIncompleteTask();
//     arrayObjectCompleted.push(newTasksCompleted);
//     console.log(arrayObjectCompleted);
//     deleteRowTable(arrayObjectIncomplete);
//     showNotTaskInTable()
    
// }

// const uncompleteTaskAddtableIncompleted = () => {

//     let pr = event.target
//     let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
//     let find = arrayObjectCompleted.find(x => x.name == finPr)
//     TasksCompletedToIncomleted = new task(find.name, find.description, find.createdAt, "--")
//     document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="completeTaskAddTableCompleted()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td id="select" class="text-center text-primary "> <a onclick="showInfoTask(arrayObjectIncomplete)" class="text-decoration-none" href="#">' + find.name + '</a></td> <td class="text-center">' + find.createdAt + '</td> <td class="text-center">' + TasksCompletedToIncomleted.finishedAt + '</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-dark"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="showModalDelete(arrayObjectIncomplete)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
//     arrayObjectIncomplete.push(TasksCompletedToIncomleted)
//     console.log(arrayObjectCompleted)
//     deleteRowTable(arrayObjectCompleted)
//     loadNumberOfIncompleteTask();
//     showNotTaskInTable()
// }

// cancelEditButton.addEventListener("click", hideEditTaskForm)

// cancelNewButton.addEventListener("click", hideNewTaskForm)

// const deleteRowTable = (array) => {
//     let pr = event.target
//     pr.closest(" tr ").remove()
//     let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
//     let findModal = array.find(x => x.name == finPr)
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element.name == findModal.name) {
//             array.splice(index, 1)
//         }
//     }
//     console.log(arrayObjectIncomplete);
//     loadNumberOfIncompleteTask()
//     showNotTaskInTable()
// }

// deleteTaskButton.addEventListener("click", deleteTask)

// const showModalDelete = (array) => {
//     let pr = event.target
//     deleteListModal = pr.closest("tr")
//     let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
//     findModal = array.find(x => x.name == finPr)
// }

// const edit = () => {
//     hide(addTaskButton)
//     hide(footerSelectTaskPreview)
//     hide(footerInfoTask)
//     show(editTask)
//     hide(tableTaskIncomplete)
//     hide(tableTaskComplete)
//     let pr = event.target
//     let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
//     findTasks = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
//     findEdit = arrayObjectIncomplete.find(x => x.name == finPr)
//     document.getElementById("edit-title").value = findEdit.name
//     document.getElementById("edit-description").value = findEdit.description

// }



// editTaskButtom.addEventListener("click", showEditTaskForm)

