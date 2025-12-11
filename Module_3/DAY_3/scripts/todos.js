import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import { displayTodos } from "./displayTodos.js";

// Check login
if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first!");
    window.location.href = "./login.html";
}

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// Fetch and display todos
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodos(data))
    .catch(err => console.log(err));