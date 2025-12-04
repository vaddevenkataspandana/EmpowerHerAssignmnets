// index.js

const TODO_KEY = "masai_todos";
const apiURL = "https://jsonplaceholder.typicode.com/todos"; // /todos endpoint[web:2]

const loadBtn = document.getElementById("load-btn");
const container = document.getElementById("todo-container");

// 1. Fetch todos and store first 20 in localStorage
async function fetchAndStoreTodos() {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();                 // array of 200 todos[web:2]
    const first20 = data.slice(0, 20);
    localStorage.setItem(TODO_KEY, JSON.stringify(first20)); // store as string[web:10]
    renderTodos();
  } catch (e) {
    console.log("Error:", e);
  }
}

// 2. Get todos from localStorage
function getTodosFromStorage() {
  const str = localStorage.getItem(TODO_KEY);      // read key[web:10]
  if (!str) return [];
  return JSON.parse(str);
}

// 3. Save todos back to localStorage
function saveTodosToStorage(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos)); // overwrite[web:10]
}

// 4. Render todos on UI
function renderTodos() {
  const todos = getTodosFromStorage();
  container.innerHTML = "";                        // clear previous render

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    const info = document.createElement("div");
    info.innerHTML = `
      <p>Title: ${todo.title}</p>
      <p>Completed: ${todo.completed}</p>
    `;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    div.appendChild(info);
    div.appendChild(delBtn);
    container.appendChild(div);
  });
}

// 5. Delete a specific todo (no page refresh)
function deleteTodo(id) {
  let todos = getTodosFromStorage();
  todos = todos.filter((t) => t.id !== id);        // remove matching id
  saveTodosToStorage(todos);
  renderTodos();                                   // re-render updated list
}

// Button click to fetch from API first time
loadBtn.addEventListener("click", fetchAndStoreTodos);

// Optional: render if already present in localStorage when page opens
renderTodos();