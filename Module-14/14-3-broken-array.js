/* 14-4: Debug a Broken Array Problem (Multi-Bug Edition) */

/**
 * Problem 1: getLastTwo(arr)
 * Purpose: should return the last 2 elements of the array as a new array.
 * Bugs: 2 bugs — 1 syntax, 1 runtime/logic.
 * Expected: getLastTwo([10, 20, 30, 40]) -> [30, 40]
 */
function getLastTwo(arr) {
  return arr.slice(arr.length - 2, arr.length);
}

// console.log(getLastTwo([10, 20, 30, 40, 500, 1000, 15000, 2000]));

/**
 * Problem 2: findIndexOfValue(arr, target)
 * Purpose: should return the index of target inside arr, or -1 if not found.
 * Bugs: 2 bugs — 1 runtime, 1 logic (off-by-one causes the runtime error).
 * Expected: findIndexOfValue([10, 20, 30], 20) -> 1
 */
function findIndexOfValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log("i->", i, arr[i]);
    if (arr[i].toString() === target.toString()) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndexOfValue([10, 20, 30], 30));

/**
 * Problem 3: averageOfPositives(arr)
 * Purpose: should return the average of only the positive numbers in arr.
 * Bugs: 3 bugs — all logic errors.
 * Expected: averageOfPositives([-5, 10, 15, -2, 5]) -> 10
 */
function averageOfPositives(arr) {
  let total = 0;
  let count = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total = total + Number(arr[i].toFixed(2));
    }
  }

  return total / count;
}

console.log(averageOfPositives([-5, 10.22, 15.243432, -2, 5]));
console.log(averageOfPositives([10, 20, 30, 40]));
