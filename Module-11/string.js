const cup = 'World        Cup';
const tea = "Tea cup";

const numbers = [4, 54, 6, 78, 11];
console.log(numbers.length);
console.log(numbers[0]); 
numbers[0] = 99;
console.log(numbers);


const location = 'Dhaka';
console.log(location.length);
console.log(location[0]) // get first character
location[0] = 'F'; // Can't Change the first character from D to F as like array because its immutable
console.log(location);