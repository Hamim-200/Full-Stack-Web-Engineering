/*
Task 9.1 — Contact Book 
Build a small "contact" system: 
let contact = { 
name: "Alex Johnson", 
email: "ALEX@EMAIL.COM", 
phone: "555-1234" 
}; 
    1. Convert the email to lowercase and update the object. 
    2. Loop through the contact object and print each key-value pair. 
    3. Add a new property favoriteWords: [] (an array) — push 3 words to it. 
    4. Reverse the name string just for fun using one of your three reverse functions from 
    Task 4.1. 
    5. Check if the email includes "@email.com" (case-insensitive) and log a confirmation 
    message.
*/


let contact = {
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
};


// 1. Lowercase the email
contact.email = contact.email.toLowerCase();
console.log(contact.email); // "alex@email.com"

// 2. Loop through and print each key-value pair
for (let key in contact) {
    console.log(`${key}: ${contact[key]}`);
}

// 3. Add favoriteWords array and push 3 words
contact.favoriteWords = [];
contact.favoriteWords.push("curious", "creative", "kind");
console.log(contact.favoriteWords); // ["curious", "creative", "kind"]

// 4. Reverse the name using a Task 4.1 function
console.log(reverseString1(contact.name)); // "nosnhoJ xelA"

// 5. Check if email includes "@email.com" (case-insensitive)
if (contact.email.toLowerCase().includes("@email.com")) {
    console.log("Email confirmed: valid domain.");
} else {
    console.log("Email domain not recognized.");
}