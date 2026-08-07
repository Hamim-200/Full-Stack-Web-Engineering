// MAP -> Used to transform each element.Returns a new array.

let numbers = [2, 4, 6, 8, 10];
const doubled = numbers.map(num => num * 2);
console.log("Using Array map doubled the array elements", doubled);


// Foreach: simply iterate loop
let rolls = [10, 12, 24, 30];
rolls.forEach((num, ind, arr) => {
    console.log("Using For each", num, ind, arr);
})


// Filter: filter out element and create new array based on condition
let prices = [100, 200, 300, 400, 500, 600, 1500];
let costlyProducts = prices.filter((elem) => elem >= 400)
console.log("Costly Products using Filter Method", costlyProducts);

// Find: Find out first element  based on condition
let prices2 = [30, 100, 200, 300, 400, 501, 500, 502, 600, 1500];
let expensiveProduct = prices2.find((elem) => elem > 400);
console.log("Get expensive products using find", expensiveProduct);


// Array of phone objects
const phones = [
    { model: "iPhone 15", price: 72000 },
    { model: "iPhone 16", price: 86000 },
    { model: "iPhone 17", price: 92000 },
    { model: "S25 Ultra", price: 92000 },
    { model: "Tecno", price: 15000 },
    { model: "Samsung A07", price: 17000 },
];


// Find phones with a price of 50,000 or more.
const expensivePhones = phones.filter(phone => phone.price >= 50000);
// Find phones with a price of 20,000 or less.
const cheapestPhones = phones.filter(phone => phone.price <= 20000);

console.log("Expensive Phones:", expensivePhones);
console.log("Cheapest Phones:", cheapestPhones);