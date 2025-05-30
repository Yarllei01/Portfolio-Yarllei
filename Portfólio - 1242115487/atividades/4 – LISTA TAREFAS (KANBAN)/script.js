function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const task = document.createElement("div");
        task.className = "task";
        task.draggable = true;
        task.style.padding = "1px 1px";

        // Cria o texto da tarefa
        const span = document.createElement("span");
        span.textContent = taskText;

        // Cria o botão de remover
        const btnRemove = document.createElement("button");
        btnRemove.textContent = "✖";
        btnRemove.title = "Remover";
        btnRemove.style.marginLeft = "8px";
        btnRemove.style.background = "#dc3545";
        btnRemove.style.color = "#fff";
        btnRemove.style.border = "none";
        btnRemove.style.borderRadius = "50%";
        btnRemove.style.cursor = "pointer";
        btnRemove.style.width = "24px";
        btnRemove.style.height = "24px";
        btnRemove.style.fontSize = "14px";
        btnRemove.style.display = "inline-flex";
        btnRemove.style.alignItems = "center";
        btnRemove.style.justifyContent = "center";
        btnRemove.onclick = function() {
            task.remove();
        };

        // Monta a tarefa
        task.appendChild(span);
        task.appendChild(btnRemove);

        task.addEventListener("dragstart", dragStart);
        task.addEventListener("dragend", dragEnd);

        const initialList = document.querySelector("#taskList1");
        const color = initialList.getAttribute("data-color");
        task.style.backgroundColor = color;

        initialList.querySelector(".task-container").appendChild(task);
        taskInput.value = "";
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
