const deleteRowTable = (array) => {
    let pr = event.target
    pr.closest(" tr ").remove()
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    let findModal = array.find(x => x.name == finPr)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.name == findModal.name) {
            array.splice(index, 1)
        }
    }
    loadNumberOfIncompleteTask()
    showNotTaskInTable()
}