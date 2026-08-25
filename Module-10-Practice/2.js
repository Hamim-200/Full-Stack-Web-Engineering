// 1. Combine two arrays into one new array. Log the result.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2)
console.log(combined);


// 2.Take a portion of an array (not the whole thing) without changing the original. Log the result. 
let full_array = [1, 2, 3, 4, 5, 6]
let portion = full_array.slice(2, 5);
console.log(portion); // [3, 4, 5]
console.log(full_array); // Original array remains unchanged


// 3. Turn an array of words into a single sentence string.Expected: a string like "word word word" 

let words = ["Hello", "world", "this", "is", "JavaScript"];
let sentence = words.join(" ");
console.log(sentence); // "Hello world this is JavaScript"


// 4. Check two variables (one array, one not) and log whether each is an array. 

let var1 = "Hamim";
let var2 = [1, 2, 3, 4, 5];
console.log(Array.isArray(var1)); // false
console.log(Array.isArray(var2)); // true


// 5. Reverse an array of at least 5 items. Log the result.
let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]


// 6. Sort an array of names alphabetically. Log the result. 
let names = ["Charlie", "Alice", "Bob"];
let sortedName = names.slice().sort();
console.log(sortedName); // ["Alice", "Bob", "Charlie"]


// 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

let unsortedNumbers = [5, 2, 9, 1, 5, 6];
let sortedNumber = unsortedNumbers.slice().sort((a, b) => a - b);
console.log(sortedNumber); // [1, 2, 5, 5, 6, 9]    


// 8. Given an array of numbers, log only the values greater than 10, using a loop. 

let numArray = [5, 12, 8, 20, 3, 15];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 10) {
        console.log(numArray[i]);
    }
}


// 9. Given an array of numbers, calculate and log the total sum, using a loop.
let sumArray = [5, 12, 8, 20, 3, 15, 2];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
    sum = sum + sumArray[i];
}
console.log("Sum of the array is: " + sum); // Sum of the array is: 63