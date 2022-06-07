

 function showEditTaskForm(){
    if (document.getElementById("edit-title").value.length == 0) {
        alert("Add Title Task")
    } else {
        show(addTaskButton)
        show(footerSelectTaskPreview)
        hide(editTask)
        show(tableTaskIncomplete)
        findEdit.name = document.getElementById("edit-title").value;
        findEdit.description = document.getElementById("edit-description").value;
        findTasks.innerHTML = document.getElementById("edit-title").value
        console.log(arrayObjectIncomplete);
    }
}  
 editTaskButtom.addEventListener("click", showEditTaskForm)

