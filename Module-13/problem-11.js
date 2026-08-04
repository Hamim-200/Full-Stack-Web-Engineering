// Problem 11: Sum and Average of an Array

// let arr = [500, 120, 20, 5010, 1220, 7500];
let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    average = sum / arr.length;
}
console.log(average)


// USING FUNCTION
function generateAvg(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(generateAvg([5, 10, 15]));
console.log(generateAvg([1, 2, 3]));
console.log(generateAvg([10, 10, 10]));