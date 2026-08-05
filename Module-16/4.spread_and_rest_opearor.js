let numbers = [10, 20, 30, 40, 50, 2000];
console.log(...numbers);


let students = {
  name: "Utsho",
  age: 26,
};

let students2 = { ...students, gpa: "5.00" };

students.something = "test";
console.log(students2);