// Problem 5: Reverse a String

// let str = "programming";
// let reverseWord = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     let letter = str[i];
//     reverseWord = reverseWord + letter;
// }
// console.log(reverseWord)

function reverseWord(str) {
    let reverseWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        reverseWord = reverseWord + letter;
    }
    return reverseWord;
}

console.log(reverseWord("Heello"))