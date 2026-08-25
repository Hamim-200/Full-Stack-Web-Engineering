// Rotate an array left by one position (first item moves to the end). Log the result.


let array = [1,2,3,4,5]
let firstItem = array.shift();
array.push(firstItem);
console.log(array);