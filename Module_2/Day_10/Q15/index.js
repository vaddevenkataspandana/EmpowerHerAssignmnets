
// a) Template Literal
const username = "Sam";
const course = "Web Development";

console.log(`Hello, welcome to the course ${course}!`);


// b) Convert object into shorthand syntax
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

console.log(student);
student.greet();


// c) Arrow function shorthand (no return keyword)
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("John", "Doe"));
