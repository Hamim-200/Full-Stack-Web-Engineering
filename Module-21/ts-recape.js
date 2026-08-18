"use strict";
const destination = "Dinajpur";
const money = 1000;
const countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan"];
function buyBook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `You bought the book "${title}" for $${price - discount}.`;
}
const tubeLights = {
    brand: "Philips",
    price: 20,
    color: "White",
    isEnergyEfficient: true,
};
console.log(tubeLights.brand); // Output: Philips


//Union String | Number | boolean | NULL
