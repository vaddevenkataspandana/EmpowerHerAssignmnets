// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);       
const multiLine = `This is
a multi-line
string.`;
console.log(multiLine);
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = n => n * n;
const objArrow = { value: 50, test: () => console.log(this.value) }; // logs undefined
const objNormal = { value: 50, test: function(){console.log(this.value);} }; // logs 50
objArrow.test();
objNormal.test();

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const shallowCopy = { ...product };
const a = { x: 1 }, b = { y: 2 };
const mergedObj = { ...a, ...b };
function maxValue(...nums) { return Math.max(...nums); }

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [valA, valB] = arr;
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
const info = {};
console.log(info?.name); // undefined

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) console.log(i); // 0 1 2
for (let j = 0; j < 3; j++) console.log(j); // 0 1 2
// const is used so values are not reassigned

// 6. Ternary Operator – Practice
let speed = (kmph > 60) ? "Fast" : "Normal"; // Define kmph as needed
let status = (age >= 18) ? "Adult" : "Minor"; // Define age as needed
let numType = (num > 0) ? "Positive" : (num === 0) ? "Zero" : "Negative"; // Define num

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const numsPlus = [...nums, 4, 5];
const arrA = ["x", "y"], arrB = ["z"];
const combinedArr = [...arrA, ...arrB];
function printNames(...names) { return names; } // e.g. printNames("A","B","C")

// 8. Object Destructuring & Shorthand
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
const idShort = 101, roleShort = "admin";
const userShort = { id: idShort, role: roleShort };
const nameShort = "Alex", ageShort = 25;
const personShort = { name: nameShort, age: ageShort, greet(){console.log(Hello, ${this.name});} };

// 9. Template Literals (More Practice)
console.log(`Today's date is: ${new Date().toDateString()}`);
function printScore(name, score){ console.log(Hello ${name}, your score is ${score}/100); }

// 10. Arrow Function Shorthands
const add = (a, b) => a + b;
const isAdult = age => age >= 18;
const double = n => n * 2;

// 11. Spread Operator (Arrays & Objects)
const cloneArray = [...nums]; 
const beginArr = [100, ...nums]; 
const objX = { x: 1, y: 2 }, objY = { y: 99, z: 3 };
const mergeOverride = { ...objX, ...objY }; 

// 12. Optional Chaining (More Practice)
const user2 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user2.address?.city); 
console.log(user2.job?.title); 
const objOpt = {};
console.log(objOpt.address?.city); 