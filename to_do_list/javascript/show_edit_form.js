const edit = () => {
    hide(addTaskButton)
    hide(footerSelectTaskPreview)
    hide(footerInfoTask)
    show(editTask)
    hide(tableTaskIncomplete)
    hide(tableTaskComplete)
    let pr = event.target
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    findTasks = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
    findEdit = arrayObjectIncomplete.find(x => x.name == finPr)
    document.getElementById("edit-title").value = findEdit.name
    document.getElementById("edit-description").value = findEdit.description

}