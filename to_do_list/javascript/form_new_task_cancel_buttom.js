function hideNewTaskForm(){
    if (arrayObjectIncomplete.length >= 1) {
        incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
        completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
        show(addTaskButton)
        hide(taskNewForm)
        show(tableTaskIncomplete)
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    } else {
        show(addTaskButton)
        hide(taskNewForm)
        hide(tableTaskIncomplete)
        document.getElementById("title-tasks").value = ""
        document.getElementById("description-tasks").value = ""
    }
}

cancelNewButton.addEventListener("click", hideNewTaskForm)