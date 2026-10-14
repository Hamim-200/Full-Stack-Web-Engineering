// Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.

let val : unknown = "Hello bangladesh";

console.log((val as string).length);
console.log((<string>val).length);