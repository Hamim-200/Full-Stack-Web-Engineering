// Problem 7: Check if a String is a Palindrome


function palindrome(str) {
    let reverseWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        reverseWord = reverseWord + letter;
    }
    if (reverseWord === str) {
        return "Palindrome"
    }
    else {
        return "Not Palindrome"
    }

}

console.log(palindrome("MADAM"))
console.log(palindrome("BADAM"))