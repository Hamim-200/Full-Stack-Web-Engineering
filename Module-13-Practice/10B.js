// Input: a sentence (string) 
// Output: sentence with word order reversed 
// Returns: a string 

function reverseWords(sentence) {
    // TODO: split into words, reverse the order, and join back together 
    let words = sentence.split(" ");
    let reversed = words.reverse();
    return reversed.join(" ");
}

console.log(reverseWords("hello world")); // Expected: "world hello" 