function showCompleteTaskList(){
    incompleteTaskNav.classList.remove("fw-bolder", "text-decoration-underline")
    completeTaskNav.classList.add("fw-bolder", "text-decoration-underline")
    show(addTaskButton)
    hide(taskNewForm)
    show(tableTaskComplete)
    hide(tableTaskIncomplete)
    show(footerSelectTaskPreview)
    hide(editTask)
    hide(footerInfoTask)
    cont = null;
}
completeTaskNav.addEventListener("click",showCompleteTaskList)