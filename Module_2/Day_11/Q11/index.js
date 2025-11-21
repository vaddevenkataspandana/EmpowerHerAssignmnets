function processProducts(products) {
    const names = products.map(function(item) {
        return item.name;
    });

    products.forEach(function(item) {
        if (item.price > 50) {
            console.log(item.name + " is above $50");
        } else {
            console.log(item.name + " is below $50");
        }
    });

    return names;
}


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

processProducts(products);
