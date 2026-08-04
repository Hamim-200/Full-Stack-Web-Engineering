// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. 


const num = 7;

console.log("Multiplication of", num, " = ");
for (let i = 1; i <= 10; i++) {
    multiplication = i * num;
    console.log(num, "X", i, " = ", multiplication);
}
