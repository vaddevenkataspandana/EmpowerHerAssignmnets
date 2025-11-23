let emp = {
    name:"prakash",
    details:{
        department:"IT",
        profile:{role:"Developer"}
    }
};
let role = emp.details?.profile?.role;
console.log("Employee Role:",role);