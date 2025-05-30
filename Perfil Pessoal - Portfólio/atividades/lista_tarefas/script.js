function addTask() {
    const taskInput = document.getElementById("taskInput")
    const taskText = taskInput.value.trim()

    if (taskText) {
        const task = document.createElement("div")
        task.className = "task"
        task.textContent = taskText
        task.draggable = true
        task.addEventListener("dragstart", dragStart)
        task.addEventListener("dragend", dragEnd)

        const initialList = document.querySelector("#taskList1")
        const color = initialList.getAttribute("data-color")
        task.style.backgroundColor = color


        initialList.querySelector(".task-container").appendChild(task)
        taskInput.value = ""
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.textContent);
    event.target.classList.add("dragging")
}

function dragEnd(event) {
    event.target.classList.remove("dragging")
}

document.querySelectorAll(".task-list").forEach(list => {
    list.addEventListener("dragover", event => {
        event.preventDefault()
    });

    list.addEventListener("drop", event => {
        event.preventDefault()
        const draggedText = event.dataTransfer.getData("text")
        const task = document.querySelector(".dragging")

        if (task) {
            const container = list.querySelector(".task-container")
            container.appendChild(task)
            const color = list.getAttribute("data-color")
            task.style.backgroundColor = color
        }
    });
});
