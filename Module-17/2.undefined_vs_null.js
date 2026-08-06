let x;
console.log(x); // undefined (value দেওয়া হয়নি)

let y = null;
console.log(y); // null (ইচ্ছাকৃতভাবে empty)

function greet(name) {
     console.log(name);
}
greet(); // undefined (argument পাঠানো হয়নি)

const obj = { age: 25 };
console.log(obj.city); // undefined (property নেই)


