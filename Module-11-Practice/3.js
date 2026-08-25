/*
Task 3.1 — Slicing Strings 
let sentence = "Learning JavaScript is fun!"; 
    ● Get just the word "Learning" using .slice(). 
    ● Get the last 4 characters ("fun!") using .slice() with a negative index. 
Task 3.2 — Combine Strings 
    ● Use .concat() to join "Hello" and "World" into "Hello World". 
    ● Use + and template literals to do the same thing. Compare all three approaches. 
*/

let sentence = "Learning JavaScript is fun!";
console.log(sentence.slice(0, 8)) //Learning
console.log(sentence.slice(-4)) //fun!


let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));
console.log(a + " " + b);        // "Hello World"
console.log(`${a} ${b}`);        // "Hello World"