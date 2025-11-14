const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add a new task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if(taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.innerText = taskText;

    // Toggle done state on click
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    // Remove task on double click
    li.addEventListener("dblclick", () => {
        todoList.removeChild(li);
    });

    // Append to list
    todoList.appendChild(li);

    // Clear input
    input.value = "";
});
