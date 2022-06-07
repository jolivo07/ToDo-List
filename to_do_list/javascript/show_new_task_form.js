function showNewTaskForm(){
    show(taskNewForm)
    hide(addTaskButton)
    hide(tableTaskComplete)
    hide(tableTaskIncomplete)
    hide(editTask)
    hide(footerInfoTask)
    hide(footerSelectTaskPreview)
    cont = 0;

}

addTaskButton.addEventListener("click", showNewTaskForm)