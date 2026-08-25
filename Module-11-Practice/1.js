/* Task 1.1 — Spot the Difference 

let str = "hello"; 
let arr = ["h", "e", "l", "l", "o"]; 
    ● Log str.length and arr.length. What do you notice? 
    ● Try str[0] and arr[0]. Do both work the same way? 
    ● Try str.push("!") — what happens? Why does this fail for strings but not arrays? 
Task 1.2 — Convert Between Them 
    ● Convert the string "JavaScript" into an array of characters. 
    ● Convert the array ["c", "a", "t"] back into a single string "cat".
 */


// =====Task 1.1 — Spot the Difference ======
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length); // 5
console.log(arr.length); // 5
// Both are 5 — a string's length counts characters just like an array counts items


console.log(str[0]); // "h"
console.log(arr[0]); // "h"
// Both str[0] and arr[0] return the first character/item, so they work similarly in this case


// console.log(str.push("!")); // TypeError: str.push is not a function
// The push method is not available for strings because strings are immutable in JavaScript, while arrays are mutable and can have items added to them.


// =====Task 1.2 — Convert Between Them ======
let string = "JavaScript";
let arrayFromString = string.split("");
console.log(arrayFromString); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let array = ["c", "a", "t"]
let backToString = array.join("");
console.log(backToString);//cat
