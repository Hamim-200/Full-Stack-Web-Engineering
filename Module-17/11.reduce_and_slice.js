const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

const sliceFruit = fruits.slice(2,4) // [ 'Orange', 'Mango' ]
const sliceFruit2 = fruits.slice(-3) // [ 'Orange', 'Mango', 'Grapes' ]
console.log(sliceFruit);
console.log(sliceFruit2);

// Reduce
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);