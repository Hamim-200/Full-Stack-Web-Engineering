/*
Task 5.1 — Build a Profile Object 
Create an object student with these properties: name, age, grade, and isEnrolled. 
    ● Log the whole object. 
    ● Log just the name property using dot notation. 
Task 5.2 — Watch the Video Concept 
After watching the "What is an Object" video, write 2–3 sentences (as a comment in your 
code) explaining an object in your own words, using a real-life analogy (not a car or a 
person — get creative!).
*/

let student = {
    name: "Maria",
    age: 26,
    grade: "A+",
    isEnrolled: true
}
console.log(student)
console.log(student.name)

// An object is like a toolbox: the toolbox itself is one single thing, but inside it, each tool has its own labeled slot (a key) so you know exactly which tool (value) to grab just by its name, instead of digging through the whole box or remembering its position.