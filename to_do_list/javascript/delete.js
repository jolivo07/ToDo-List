const deleteRowTable = (array) => {
    let pr = event.target
    pr.closest(" tr ").remove()
    let findPr = pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    let findModal = array.find(x => x.name == findPr)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.name == findModal.name) {
            array.splice(index, 1)
        }
    }
    loadNumberOfIncompleteTask()
    showNotTaskInTable()
}
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
const showModalDelete = (array) => {
    let pr = event.target
    deleteListModal = pr.closest("tr")
    let findPr = pr.closest(" tr ").querySelector(".text-decoration-none").innerHTML
    findModal = array.find(x => x.name == findPr)
}

deleteTaskButton.addEventListener("click", deleteTask)