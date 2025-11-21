// 1. Declare a global variable 'age' and assign a value to it.
var age = 25;

// 2. Create a function 'displayAge' that logs the value of 'age'.
function displayAge() {
    console.log("Age is:", age);
}

// 3. Create a second function 'changeAge', which changes the value of 'age'.
function changeAge(newAge) {
    age = newAge;
    console.log("Updated age is:", age);
}

// 4. Call displayAge and changeAge and check how the value of age is updated.
displayAge();  
changeAge(30); 
displayAge(); 