// Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky. 

let value: string | number = "100";

// convert the string to a number
const num : number = typeof value === "string" ? Number (value) : value;
console.log(num+10)