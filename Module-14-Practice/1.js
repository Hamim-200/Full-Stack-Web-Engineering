function sayHi(name) { 
console.log("Hi, " + name)  // find the bug Syntax Error
} 
sayHi("Mira");

let word = "hello"; 
console.log(word.toUpperCase()); // find the bug Runtime Error

function square(num) { 
  return num * num; // find the bug Logic Error
} 
  
console.log(square(4)); // should be 16 