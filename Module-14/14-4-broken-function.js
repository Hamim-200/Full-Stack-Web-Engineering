/* 14-5: Debug a Broken Function */

/**
 * Problem 1: calculateTotal(price, tax)
 * Purpose: should calculate and RETURN the total price including tax,
 *          so it can be used later in other calculations.
 * Bugs: 3 bugs — all about return vs print, and using the function's result.
 * Expected:
 *   calculateTotal(100, 5) -> 105
 *   finalAmount + 20 -> 125
 */
function calculateTotal(price, tax) {
  let total = price + tax;
  console.log(total);

  return total;
}

// let finalAmount = calculateTotal(500, 25);
// console.log(finalAmount + 20);
// console.log(finalAmount + 40);

/**
 * Problem 2: introduce(name, birthYear, city)
 * Purpose: should calculate age from birthYear (current year - birthYear)
 *          and return a sentence like:
 *          "My name is Alex, I am 20 years old, from Dhaka."
 * Bugs: 3 bugs — missing argument at call site, wrong variable used in
 *       calculation, and a leftover undefined variable in the return string.
 * Expected:
 *   introduce("Alex", 2006, "Dhaka") -> "My name is Alex, I am 20 years old, from Dhaka."
 *   (assuming current year is 2026)
 */
function introduce(name, year, city) {
  let currentYear = new Date().getFullYear();
  let calculatedAge = currentYear - year; 

  return "My name is " + name + ", I am " + calculatedAge + " years old, from " + city;
}

// console.log(introduce("Alex", 2006, "Dhaka"));

/**
 * Problem 3: applyDiscount(price, percent) + describeOrder(name, total)
 * Purpose: applyDiscount should return the discounted price. describeOrder should
 *          use that returned value to build a summary sentence.
 * Bugs: 3 bugs — 1 missing return, 1 function called without needed arguments,
 *       1 result never captured/used.
 * Expected:
 *   describeOrder("Sam", 100) -> "Sam's order total is $90 after discount."
 */
function applyDiscount(price, percent) {
  return price - (price * percent) / 100;
}

function describeOrder(name, total, percentage) {
  let discounted = applyDiscount(total, percentage);
  console.log("discounted", discounted);
  return name + "'s order total is $" + discounted + " after discount.";
}

console.log(describeOrder("Sam", 100, 5));
console.log(describeOrder("Utsho", 500, 50));
