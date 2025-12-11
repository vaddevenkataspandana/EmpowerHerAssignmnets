export function displayTodos(data) {
    let container = document.getElementById("todosContainer");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.innerHTML= `
            <h4>$Title:{todo.title}</h4>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}