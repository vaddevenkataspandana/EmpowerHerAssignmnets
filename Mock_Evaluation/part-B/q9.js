function displayCar() {
    console.log("Category:car");
}
function displayTruck(){
    console.log("Category:Truck");
}
function displayBike(){
    console.log("category:Bike");
}
//Higher Order Function
function vehicleInfo(vehicleCategory,callbackFn){
    console.log("Vehicle:",vehicleCategory);
    callbackFn();
}

vehicleInfo("car",displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike)