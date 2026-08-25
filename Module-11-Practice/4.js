/*
Task 4.1 — Three Reversal Methods 
Write a function reverseString(str) three different ways: 
    ● Using .split(""), .reverse(), and .join("") 
    ● Using a for loop that builds the reversed string character by character 
    ●  
Test all three with "JavaScript" → should return "tpircSavaJ". 
Bonus: Which method do you think is fastest? Why? 
*/

function reverseString1(str) {
    return str.split("").reverse().join("");
}

function reverseString2(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

// Method 3: recursion
function reverseString3(str) {
    if (str === "") return "";
    return reverseString3(str.slice(1)) + str[0];
}



console.log(reverseString1("JavaScript")); // "tpircSavaJ"
console.log(reverseString2("JavaScript")); // "tpircSavaJ"
// console.log(reverseString3("JavaScript")); // "tpircSavaJ"