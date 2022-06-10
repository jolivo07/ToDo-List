const deleteRowTable = (row) => {
    row.remove()
    let taskName = row.querySelector(".text-decoration-none").innerHTML
    
    if (tableTaskIncomplete.classList.contains("d-none")) {
        let task = arrayObjectCompleted.find(x => x.name == taskName)
        travelArrayDeleteSplice(arrayObjectCompleted,task.name)
    } else {
        let task = arrayObjectIncomplete.find(x => x.name == taskName)
        travelArrayDeleteSplice(arrayObjectIncomplete,task.name)
    }
    loadNumberOfIncompleteTask()
    showNotTaskInTable()
}

function deleteTask(){
    document.getElementById("tr-"+ btnModalDeleteTask.dataset.task).remove()
    if (tableTaskIncomplete.classList.contains("d-none")) {
        travelArrayDeleteSplice(arrayObjectCompleted, btnModalDeleteTask.dataset.task)
    } else {
        travelArrayDeleteSplice(arrayObjectIncomplete, btnModalDeleteTask.dataset.task)
    }
    loadNumberOfIncompleteTask()
    showNotTaskInTable()
    console.log(arrayObjectCompleted);
    console.log(arrayObjectIncomplete);
}

const travelArrayDeleteSplice = (x,task) => {
    for (let index = 0; index < x.length; index++) {
        const element = x[index];
        if (element.name == task) {
            x.splice(index, 1)
        }
    }
}

const showModalDelete = (event ,array) => {
     let taskName = event.closest("tr").closest(" tr ").querySelector(".text-decoration-none").innerHTML
     let task = array.find(x => x.name == taskName)
     btnModalDeleteTask.dataset.task =task.name
}

btnModalDeleteTask.addEventListener("click", deleteTask)