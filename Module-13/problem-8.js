// Problem 8: Count Words in a Sentence

let sentence = "Full Stack Web Engineering"
let split_sentence = sentence.split(" ");
console.log(split_sentence.length)


// USING FUNCTION
function wordCount(sentence) {
    let split_sentence = sentence.split(" ");
    return split_sentence.length;
}
console.log(wordCount("Full Stack Web Engineering"))