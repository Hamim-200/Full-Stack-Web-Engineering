// Input: a string 
// Output: true or false 
// Returns: a boolean 

function isPalindrome(str) {
    // TODO: reverse the string and compare it to the original 
    let reversed = str.split("").reverse().join("");
    return reversed === str

}

console.log(isPalindrome("level")); // Expected: true 
console.log(isPalindrome("hello")); // Expected: false