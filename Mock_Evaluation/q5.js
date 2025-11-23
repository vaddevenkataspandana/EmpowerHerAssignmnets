let user = {
    name:"Alice",
    address:{
        city:"Bengulur",
        pin:560001,
        geo:{lat:11.22,lng:77.33}
    }
};
let {address:{city,geo:{lat,lng}}} = user;
console.log("city",city);
console.log("latitude",lat);
console.log("longitude",lng);