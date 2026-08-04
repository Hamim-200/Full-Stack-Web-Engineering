/* 14-2: Broken Loop (1) */

// Condition:
// Return the sum of all numbers from 1 to n (inclusive).

function sumRange(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    console.log("i-> ", i);
    total += i;
  }
  return total;
}

// console.log(sumRange(5));

// Brainstorming:
// 1) Is the loop including n itself?
// 2) Which numbers are actually being added?

/* 14-2: Broken Loop (2) */

// Condition:
// Return the sum of all numbers in the array.

function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // console.log("i-> ", i, numbers[i]);
    total += Number(numbers[i].toFixed(2));
  }

  return total;
}

// console.log(sumArray([10, 20.2244, 30.524]));

// Brainstorming:
// 1) What happens when i becomes equal to numbers.length?
// 2) Which value doesn't have the .toFixed() method?







/* 14-3: Broken Loop (3) */

// Condition:
// Count how many even numbers are present in the array.

function countEven(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    console.log("i->" , i , numbers[i]);
    if (numbers[i] % 2 === 0) {
      count++
      // i++
    }
  }

  return count;
}

console.log(countEven([2, 4, 7, 5, 6, 8, 10, 11, 20, 22]));

// Brainstorming:
// 1) Why are some numbers being skipped?
// 2) Is i changing anywhere other than the loop declaration?
