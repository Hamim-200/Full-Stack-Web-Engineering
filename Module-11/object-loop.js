// const numbers = [11, 22, 33, 44, 55];
// for(const number of numbers){
//     console.log(number)
// }

const student = {
    name: 'Akbar mogol',
    id: 111,
    age: 14,
    favSubjects: ['physics', 'math', 'chemistry']
}

// for...of --> array
// for...in --> object

for (const key in student) {
    console.log(key)
    const value = student[key];
    console.log(value)
}