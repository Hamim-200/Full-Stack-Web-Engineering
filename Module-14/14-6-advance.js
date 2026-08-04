/* Advanced Error (1): Chained Method Call */

/**
 * Purpose: should join words with ", ", uppercase them, split back into
 *          an array, then return that array.
 * Bugs: 1 bug — chaining .push() onto a method chain silently breaks the type.
 * Expected: getUpperCaseWords(["javascript", "debugging"])
 */
function getUpperCaseWords(words) {
  return words.join(", ").toUpperCase().split(", ");
}

let result = getUpperCaseWords(["javascript", "debugging"]);

// console.log(result);

/* Advanced Error (2): Nested Object Bug */

/**
 * Purpose: should calculate a student's average score across their subjects.
 * Bugs: 1 bug — code assumes a property exists on the object that was never created.
 * Expected: calculateAverage(student) -> 85.00  (average of 80 and 90)
 */
function calculateAverage(student) {

  const subjects = Object.values(student.marks);
  const totalSubjects = subjects.length;

  console.log(subjects, "subjects");

  let total = 0;
  for(let elem of subjects){
    console.log(elem);
    total += elem;
  }
  console.log(total);

  console.log(total, "total");
  return (total / totalSubjects).toFixed(2);
}

let student = {
  marks: {
    math: 80,
    physics: 90,
    philosophy: 80
  },
};

// console.log(calculateAverage(student));






/* Advanced Error (3): Array of Objects + Accumulator */

/**
 * Purpose: should calculate the total value of all in-stock inventory items
 *          (quantity * price), skipping anything with 0 quantity.
 * Bugs: 3 bugs — 1 property-name typo/case mismatch, 1 broken filter condition,
 *       1 accumulator reset inside the loop.
 * Expected:
 *   getTotalStockValue(inventory) -> 700
 *   (5 * 100 + 0 * 50 (skipped) + 4 * 50 = 500 + 200 = 700)
 */
function getTotalStockValue(inventory) {
  let totalValue = 0;

  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    console.log("loop working", item);
    if (item.quantity > 0) {
      console.log("condition working", item);
      totalValue += item.quantity * item.price;
    }
  }

  return totalValue;
}

let inventory = [
  { name: "Keyboard", quantity: 5, price: 100 },
  { name: "Mouse", quantity: 0, price: 50 },
  { name: "Monitor", quantity: 4, price: 50 },
  { name: "Camera", quantity: 2, price: 500 },
];

console.log(getTotalStockValue(inventory));
