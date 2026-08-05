// Destructuring for array
const fruits = ["Apple", "Banana", "Orange"];

const [first, second, third] = fruits;

console.log(first);   // Apple
console.log(second);  // Banana
console.log(third);   // Orange





// Destructuring for object

const student = {
    name: "Utsho",
    roll: 29,
    age: 26, 
    marks: {
        physics: 95,
        philosophy: 91,
        math: 44
    }
}
// const name = student.name
// const roll = student.roll
// const math = student.marks.math
const { age , name:fullName, marks: { philosophy, physics:myPhysics } } = student

console.log(age, fullName,  philosophy, myPhysics); 