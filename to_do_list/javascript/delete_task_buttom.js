function deleteTask(){
    deleteListModal.remove()
    if (cont == null) {
        travelArrayDeleteSplice(arrayObjectCompleted)
    } else (
        travelArrayDeleteSplice(arrayObjectIncomplete)
    )
    loadNumberOfIncompleteTask()
    showNotTaskInTable()
}

const travelArrayDeleteSplice = x => {
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        if (element.name == findModal.name) {
            x.splice(index, 1)
        }
    }
}

deleteTaskButton.addEventListener("click", deleteTask)