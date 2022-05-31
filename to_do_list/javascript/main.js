document.getElementById("nav-tasks-completed").addEventListener("click", ()=>{
    document.getElementById("table-task-completed").classList.remove("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
})

document.getElementById("nav-tasks-incomplate").addEventListener("click", ()=>{
    document.getElementById("table-task-completed").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
})


document.getElementById("add-tasks").addEventListener("click", ()=>{
    document.getElementById("new-tasks").classList.remove("d-none")
    document.getElementById("table-task-completed").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("edit-tasks").classList.add("d-none")
})

conIncompleteTasks= ()=>{
    document.getElementById("cont-task-incomplete").innerHTML = `${arrayObjectIncomplete.length} Incomplete Tasks`

}

document.getElementById("create-tasks").addEventListener("click", ()=>{
    function tasksIncomplete(tasks,description,createdAt,finishedAT){
        this.tasks = tasks;
        this.description= description;
        this.createdAt = createdAt;
        this.finishedAT =finishedAT;
    }
     let d = new Date();
      m = d.getMonth() + 1;
     mes = (m < 10) ? '0' + m : m;
    document.getElementById("new-tasks").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    var taskEnter = document.getElementById("title-tasks").value
    var descriptionEnter = document.getElementById("description-tasks").value

    newTasks = new tasksIncomplete(taskEnter,descriptionEnter,d.getHours()+':'+d.getMinutes()+':'+d.getSeconds() +" --- "+d.getDate()+'/' +mes+'/' +d.getFullYear(),"--")
    addTask()

})

var arrayObjectIncomplete = []
var arrayObjectCompleted = []

const addTask = () => {
    arrayObjectIncomplete.push(newTasks)
    conIncompleteTasks()
    document.getElementById("table-incomplete").innerHTML += '<tr> <td class="text-center"><button type="button" onclick="check()" class="btn btn-link text-primary"><i class="fa-regular fa-circle-check fs-5"></i></button></td> <td class="text-center">'+newTasks.tasks+'</td> <td class="text-center">'+newTasks.createdAt+'</td> <td class="text-center">'+newTasks.finishedAT+'</td> <td class="text-center" ><button type="button" onclick="edit()" class="btn btn-link text-warning"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" onclick="selectModal()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button> </td> </tr>'
    document.getElementById("title-tasks").value = ""
    document.getElementById("description-tasks").value = ""
    console.log(arrayObjectIncomplete);
}




const check = ()=>{
    function tasksCompleted (tasks,description,createdAt,finishedAT){
        this.tasks=tasks
        this.description=description
        this.createdAt=createdAt
        this.finishedAT=finishedAT
    }
    let h = new Date()


    let pr = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
    let find =arrayObjectIncomplete.find(x => x.tasks == pr)

    newTasksCompleted = new tasksCompleted(find.tasks,find.description,find.createdAt,h.getHours()+':'+h.getMinutes()+':'+h.getSeconds() +" --- "+h.getDate()+'/' +mes+'/' +h.getFullYear())


    document.getElementById("table-completed").innerHTML += '<tr> <td class="text-center" ><button type="button" onclick="uncheck()" class="btn-close" aria-label="Close"></button></td> <td id="prueba" class="text-center">'+newTasksCompleted.tasks+'</td> <td class="text-center">'+newTasksCompleted.createdAt+'</td> <td class="text-center">'+newTasksCompleted.finishedAT+'</td> <td class="text-center"><button type="button" onclick="selectModal()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-link text-danger"><i class="fa-solid fa-trash"></i></button></td> </tr>'
    conIncompleteTasks();
    arrayObjectCompleted.push(newTasksCompleted);
    console.log(arrayObjectCompleted);
    deleted();
}

const uncheck = () =>{
  console.log("Todavia no funciona :(");

}

const deleted =()=>{
    deleteListModal = event.target.parentNode.parentNode.parentNode
    let pr = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
       findModal =arrayObjectIncomplete.find(x => x.tasks == pr)
       deleteListModal.remove()
       for (let index = 0; index < arrayObjectIncomplete.length; index++) {
           const element = arrayObjectIncomplete[index];
           if (element.tasks == findModal.tasks) {
               arrayObjectIncomplete.splice(index, 1)
           }
       }
     console.log(arrayObjectIncomplete);
     conIncompleteTasks()
}

document.getElementById("modal-delete").addEventListener("click", ()=>{

    deleteListModal.remove()
    for (let index = 0; index < arrayObjectIncomplete.length; index++) {
        const element = arrayObjectIncomplete[index];
        if (element.tasks == findModal.tasks) {
            arrayObjectIncomplete.splice(index, 1)
        }
    }

  console.log(arrayObjectIncomplete);
  conIncompleteTasks()
})

const selectModal = () =>{
  deleteListModal = event.target.parentNode.parentNode.parentNode
  let pr = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
     findModal =arrayObjectIncomplete.find(x => x.tasks == pr)
}

const edit = () =>{
    document.getElementById("edit-tasks").classList.remove("d-none")
    document.getElementById("table-task-incomplete").classList.add("d-none")
    document.getElementById("table-task-completed").classList.add("d-none")
     let pr = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
     prss = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling;
    findEdit =arrayObjectIncomplete.find(x => x.tasks == pr)
    document.getElementById("edit-title").value = findEdit.tasks
    document.getElementById("edit-description").value = findEdit.description
    console.log(findEdit);
}

document.getElementById("edit-tasks-buttom").addEventListener("click", ()=>{
    document.getElementById("edit-tasks").classList.add("d-none")
    document.getElementById("table-task-incomplete").classList.remove("d-none")
    findEdit.tasks =  document.getElementById("edit-title").value;
    findEdit.description =  document.getElementById("edit-description").value;
    prss.innerHTML = document.getElementById("edit-title").value
    console.log(arrayObjectIncomplete);


})


const infoTasks = ()=>{

}


