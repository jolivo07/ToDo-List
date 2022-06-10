const edit = (event) => {
   
    let btnEdit = event
    let taskName = btnEdit.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    taskRowHiperText = btnEdit.closest(" tr ").querySelector(".text-decoration-none")
    task = arrayObjectIncomplete.find(x => x.name == taskName)
    document.getElementById("edit-title").value = task.name
    document.getElementById("edit-description").value = task.description
    hide()
    show([formEditTask])
}

function showEditTaskForm(){
    if (document.getElementById("edit-title").value.length == 0) {
        alert("Add Title Task")
    } else {
        task.name = document.getElementById("edit-title").value;
        task.description = document.getElementById("edit-description").value;
        taskRowHiperText.innerHTML = document.getElementById("edit-title").value
        console.log(arrayObjectIncomplete);
        hide()
        show([btnAddTask,footerSelectTaskPreview,tableTaskIncomplete])
    }
}  

function hideEditTaskForm(){
    navIncompleteTask.classList.add("fw-bolder", "text-decoration-underline")
    navCompleteTask.classList.remove("fw-bolder", "text-decoration-underline")
    hide()
    show([btnAddTask,tableTaskIncomplete])
}

 btnCancelEdit.addEventListener("click", hideEditTaskForm)
 btnEditTask.addEventListener("click", showEditTaskForm)

