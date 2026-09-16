// Task 8: getManagerName — Optional Chaining

function getManagerName(employee) {
    return employee.manager?.name;
}
console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } })); // "Tanvir"
console.log(getManagerName({ name: "Rafi" }));