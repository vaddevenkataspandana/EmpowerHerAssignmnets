function countCategories(arr) {
    const result = arr.reduce(function (acc, category) {
        if (acc[category]) {
            acc[category]++;     
        } else {
            acc[category] = 1;   
        }
        return acc;
    }, {});

    return result;
}


let categories = [
    "electronics", "clothing", "electronics",
    "toys", "clothing", "toys", "toys"
];

let output = countCategories(categories);
console.log(output);
