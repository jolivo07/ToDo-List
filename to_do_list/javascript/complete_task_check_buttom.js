const completeTaskAddTableCompleted = () => {
    let pr = event.target
    let finPr = pr.closest(" tr ").firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.innerHTML
    let find = arrayObjectIncomplete.find(x => x.name == finPr)
    let newTasksCompleted = new tasksCompleted(find.name, find.description, find.createdAt, moment().format('llll'))
    document.getElementById("table-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncompleteTaskAddtableIncompleted()" class="btn btn-link text-danger"><i class="fa-solid fa-circle-minus"></i></button></td> <td id="select" class="text-center text-primary prueba"> <a onclick="showInfoTask(arrayObjectCompleted)" class="text-decoration-none" href="#">' + newTasksCompleted.name + '</a></td> <td class="text-center">' + newTasksCompleted.createdAt + '</td> <td class="text-center">' + newTasksCompleted.finishedAT + '</td> <td class="text-center"><button type="button" onclick="showModalDelete(arrayObjectCompleted)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    loadNumberOfIncompleteTask();
    arrayObjectCompleted.push(newTasksCompleted);
    deleteRowTable(arrayObjectIncomplete);
    showNotTaskInTable()
    
}