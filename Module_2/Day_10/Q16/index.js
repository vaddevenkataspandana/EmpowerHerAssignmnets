// Q16 - Arrow Functions & Ternary Operator

// a) Arrow function isEven(n) that returns true if even, else false
const isEven = (n) => n % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(7));  // false


// b) Rewrite using ternary operator
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);


// c) Arrow function greet(name) using ternary operator
// If no name passed → print "Guest"
const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Sam"));   // Hello, Sam
console.log(greet(""));      // Hello, Guest
console.log(greet());        // Hello, Guest
