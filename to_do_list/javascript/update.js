const edit = () => {
    hide()
    show([editTask])
    let pr = event.target
    let findPr = pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    findTasks = pr.closest(" tr ").querySelector(".text-decoration-none")
    findEdit = arrayObjectIncomplete.find(x => x.name == findPr)
    document.getElementById("edit-title").value = findEdit.name
    document.getElementById("edit-description").value = findEdit.description
}

function showEditTaskForm(){
    if (document.getElementById("edit-title").value.length == 0) {
        alert("Add Title Task")
    } else {
        hide()
        show([addTaskButton,footerSelectTaskPreview,tableTaskIncomplete])
        findEdit.name = document.getElementById("edit-title").value;
        findEdit.description = document.getElementById("edit-description").value;
        findTasks.innerHTML = document.getElementById("edit-title").value
        console.log(arrayObjectIncomplete);
    }
}  

function hideEditTaskForm(){
    hide()
    show([addTaskButton,tableTaskIncomplete])
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
}

cancelEditButton.addEventListener("click", hideEditTaskForm)
 editTaskButtom.addEventListener("click", showEditTaskForm)

