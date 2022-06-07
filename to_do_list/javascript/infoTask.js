const showInfoTask = (array) => {

    let pr = event.target
    let finPr = pr.closest("a").innerHTML
    let findArray = array.find(x => x.name == finPr)
    show(footerInfoTask)
    hide(footerSelectTaskPreview)
    document.getElementById("footer-task-name").innerHTML = findArray.name
    document.getElementById("footer-task-description").innerHTML = findArray.description
    if (array == arrayObjectIncomplete) {
        document.getElementById("footer-task-date").innerHTML = "Tasks Not Completed"

    } else {
        document.getElementById("footer-task-date").innerHTML = "Was Completed On " + findArray.finishedAT
    }

}