const grade = 10;

if (grade >= 80) {
    console.log("A+")
}
else if (grade >= 70) {
    console.log("A")
}
else if (grade >= 60) {
    console.log("B")
}
else if (grade >= 50) {
    console.log("c")
}
else {
    console.log("F")
}


// =============================
const bmi = 25;

if (bmi < 18.5) {
    console.log("Underweight")
}
else if (bmi <= 18.5 || bmi < 25) {
    console.log("Normal")
}
else if (bmi <= 25 || bmi < 30) {
    console.log("Overweight")
}
else{
    console.log("Obese")
}