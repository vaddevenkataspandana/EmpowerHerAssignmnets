const profile = { 
  name: "Charlie", 
  age: 29, 
  address: { 
    city: "San Francisco", 
    zipcode: "94101" 
  } 
};

const updates = { 
  age: 30, 
  address: { 
    zipcode: "94109", 
    country: "USA" 
  } 
};

// Merge using spread operator
const result = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(result);
console.log(JSON.stringify(result, null, 2));

