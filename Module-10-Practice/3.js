// Given an array of numbers, remove duplicates and log the unique values only. 

let array = [1, 2, 3, 2, 4, 5, 1, 6, 3];
let unique = [...new Set(array)];
console.log(unique); // [1, 2, 3, 4, 5, 6]