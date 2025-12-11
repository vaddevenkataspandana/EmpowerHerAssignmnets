import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

let btn = document.getElementById("loginbtn");

btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user found. Please signup first.");
        return;
    }

    if (email === user.email && password === user.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "./todos.html";
    } else {
        alert("Invalid credentials");
    }
});