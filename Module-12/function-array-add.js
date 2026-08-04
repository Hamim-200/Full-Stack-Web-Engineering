const numbers = [12, 4, 6, 18, 56];

let sum = 0;
for (const num of numbers) {
    sum = sum + num;
    // console.log(num, sum);
}
// console.log(sum);

const odds = [23, 15, 71, 29, 97];

let sumOdds = 0;
for (const num of odds) {
    sumOdds = sumOdds + num;
}

const evens = [24, 96, 12, 6, 44];

let sumEvens = 0;
for (const num of evens) {
    sumEvens = sumEvens + num;
}


function sumOfArray(array) {
    console.log('inside the function', array)
    let sum = 0;
    for (const num of array) {
        // console.log(num)
        sum = sum + num;
    }
    return sum;
}

const result = sumOfArray(numbers);
console.log('sum of array', result);
const resultOdd = sumOfArray(odds);
console.log('sum of odd numbers', resultOdd);
const resultEven = sumOfArray(evens);
console.log('sum of even numbers', resultEven);