function showIncompleteTaskList(){
    incompleteTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    show(addTaskButton)
    hide(taskNewForm)
    hide(tableTaskComplete)
    show(tableTaskIncomplete)
    hide(editTask)
    show(footerSelectTaskPreview)
    hide(footerInfoTask)
    cont = 0;

}
incompleteTaskNav.addEventListener("click", showIncompleteTaskList)