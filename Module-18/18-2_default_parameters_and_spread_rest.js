/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function calculateTotal(discount, ...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    let discountAmount = (total * discount) / 100;
    let mainAmount = total - discountAmount;

    return mainAmount;
}
console.log(calculateTotal(10, 100, 200, 300))





/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let mergeArray = [...arr1, ...arr2]
console.log(mergeArray);

let newArray = [...new Set(mergeArray)];

console.log(newArray);