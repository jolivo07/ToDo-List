const showModalDelete = (array) => {
    let pr = event.target
    deleteListModal = pr.closest("tr")
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    findModal = array.find(x => x.name == finPr)
}