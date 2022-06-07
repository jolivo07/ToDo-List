
var showNotTaskInTable = () => {
    if ((arrayObjectIncomplete.length) == 0) {
        document.getElementById("not-incomplete-tasks").classList.remove("d-none")
    } else {
        document.getElementById("not-incomplete-tasks").classList.add("d-none")
    }

    if ((arrayObjectCompleted.length) == 0) {
        document.getElementById("not-completed-tasks").classList.remove("d-none")
    } else {
        document.getElementById("not-completed-tasks").classList.add("d-none")
    }


}