// a) Spread operator to merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let merged = [...arr1, ...arr2];
console.log("Merged Array:", merged); 

// b) Using Rest operator to return sum of numbers
function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log("Sum:", sum(1, 2, 3, 4)); 

// c) Multi-level destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log("Name:", name);   
console.log("City:", city);   
console.log("Pin:", pin);    
