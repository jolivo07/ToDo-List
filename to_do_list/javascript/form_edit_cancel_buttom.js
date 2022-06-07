function hideEditTaskForm(){
    show(addTaskButton)
    hide(editTask)
    show(tableTaskIncomplete)
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
}

cancelEditButton.addEventListener("click", hideEditTaskForm)