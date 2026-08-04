// Problem 6: Count Vowels in a String

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

let phVowelCount = countVowels("Programming Hero")
console.log("Programming Hero te vowel ache: ", phVowelCount);

let bdVowelCount = countVowels("Bangladesh")
console.log("Bangladesh e vowel ache: ", bdVowelCount);


let str = "hamim";
let vowels = 'aeiou'
let count = 0;

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.includes(letter)) {
        count++;
    }
}
console.log("The Word", str, "consist of, ", count, "Vowels.")
