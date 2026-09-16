// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess. 

// first "5" is String, it converts to number and then check 5=5 so give output "True"

// when we use === "5" is String, and 5 in number so its check the datatype and value so its not match so its give "false" output

let a = 5;
let b = "5";

console.log(a == b);   // true
console.log(a === b);  // false