import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

let btn = document.getElementById("signupbtn");

btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    // save user in localStorage
    let user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "./login.html";
});