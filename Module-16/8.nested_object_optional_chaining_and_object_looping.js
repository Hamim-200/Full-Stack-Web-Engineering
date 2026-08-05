// Nested Object
// const student = {
//     name: "Hamim",
//     age: 22,
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh"
//     }
// };

console.log(student.address.city);     // Dhaka
console.log(student.address.country);  // Bangladesh


// Optional Chaining
const student = {
    name: "Hamim",
    address: {
        city: "Dhaka"
    }
};

console.log(student.address.city);          // Dhaka
console.log(student.address.country);       // undefined
console.log(student.contact?.phone);        // undefined (No Error)

// Object Looping
const person = {
    name: "Hamim",
    age: 22,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key, ":", person[key]);
}