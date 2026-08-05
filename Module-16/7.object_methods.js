const person = {
  name: "Hamim",
  age: 22,
  city: "Dhaka"
};

// Object.keys() → Returns an array of all property names (keys)
console.log(Object.keys(person));
// ["name", "age", "city"]

// Object.values() → Returns an array of all property values
console.log(Object.values(person));
// ["Hamim", 22, "Dhaka"]

// Object.entries() → Returns an array of [key, value] pairs
console.log(Object.entries(person));
// [["name", "Hamim"], ["age", 22], ["city", "Dhaka"]]

// delete → Removes a property from an object
delete person.city;
console.log(person);
// { name: "Hamim", age: 22 }

// Object.seal() → Prevents adding or deleting properties, but allows updating existing ones
Object.seal(person);
person.age = 23;          // ✅ Allowed
person.country = "BD";    // ❌ Not added
delete person.name;       // ❌ Not deleted
console.log(person);
// { name: "Hamim", age: 23 }

// Object.freeze() → Prevents adding, deleting, or modifying properties
Object.freeze(person);
person.age = 25;          // ❌ No change
person.city = "Dhaka";    // ❌ Not added
delete person.name;       // ❌ Not deleted
console.log(person);
// { name: "Hamim", age: 23 }