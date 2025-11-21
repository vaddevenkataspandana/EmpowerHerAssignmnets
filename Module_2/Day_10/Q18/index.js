// Scoping Example
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); 
console.log(x); 

// Optional Chaining Example
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone); 

// Preventing runtime error
const data = { id: 1 };
console.log(data?.user?.details?.email); 
