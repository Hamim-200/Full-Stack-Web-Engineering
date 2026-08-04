// Problem 13: Loop Through an Object's Properties

let monitor = {
  color: "Black",
  brand: "LG",
  display: "Something",
  size: "Something",
  test: "Dummy",
};

console.log(monitor["color"]); // bracket notation
console.log(monitor.brand); // dot notation

// For in loop
for (let key in monitor) {
  console.log(key, ": ", monitor[key]);
}

// Using keys method
let objKeys = Object.keys(monitor);
console.log(objKeys);

// for (let i = 0; i < objKeys.length; i++) {
//   let key = objKeys[i];
//   console.log(key, ": ", monitor[key]);
// }

for (let key of objKeys) {
  console.log(key, ": ", monitor[key]);
} 