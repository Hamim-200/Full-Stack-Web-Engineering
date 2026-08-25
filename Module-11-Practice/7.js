/*
Task 7.1 — Keys and Values 
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 }; 
    ● Get an array of all keys  
    ● Get an array of all  
    ● Delete the pages property using delete. 

Task 7.2 — Nested Objects 
let user = { 
username: "coder123", 
address: { 
city: "Austin", 
zip: "78701" 
} 
} 
    ● Log the city using dot notation chaining. 
    ● Add a country property inside the address. 
    ● Delete the zip property from the nested object.
*/

let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
console.log(Object.keys(book));
console.log(Object.values(book));

delete book.pages;
console.log(book)


let user = {
    username: "coder123",
    address: {
        city: "Austin",
        zip: "78701"
    }
}

console.log(user.address.city);

user.address.country = "America"
console.log(user);

delete user.address.zip;
console.log(user);