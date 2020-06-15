const API_URL = "https://my-json-server.typicode.com/jimmydsc94/simplescrum/db"

let task = []

axios.get(API_URL)
    .then( resp => fillTasks(resp.data))
    .catch( err => console.error(err))

const fillTasks = (data) => {
    data.tasks.map ( d => {

        let newTask = document.createElement("article")
        newTask.classList.add("task")

        let taskTitle = document.createElement("h3")
        taskTitle.innerText = d.title

        let taskPerson = document.createElement("p")
        taskPerson.innerHTML = `<spam>Responsable:</spam> ${d.person}`

        let taskDeadline = document.createElement("p")
        taskDeadline.innerHTML = `<spam>Plazo:</spam> ${unixToDate(d.deadline)}`

        newTask.appendChild(taskTitle)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)

        let columnToDo = document.getElementById("todoTasks")
        let columnInProgress = document.getElementById("inProgressTasks")
        let columnDone = document.getElementById("doneTasks")

        if (d.state == "to-do"){
            columnToDo.appendChild(newTask)
        } else if(d.state == "in-progress"){
            columnInProgress.appendChild(newTask)
        } else if (d.state == "done"){
            columnDone.appendChild(newTask)
        }

    })
}