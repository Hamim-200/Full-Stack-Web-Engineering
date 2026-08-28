// Input: a number 
// Output: the number with digits reversed 
// Returns: a number 

function reverseNumber(num) {
    let str = num.toString();
    // TODO: build the reversed string, then convert back to a number 
    let reversedStr = str.split("").reverse().join("");
    return Number(reversedStr)

}

console.log(reverseNumber(1234)); // Expected: 4321 
console.log(reverseNumber(7));    // Expected: 7