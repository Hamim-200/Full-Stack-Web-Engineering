/* 14-2: Broken Conditional (1) */

function checkAdult(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

// console.log(checkAdult(17));

// Brainstorming:
// 1) Did I compare or assign the value?
// 2) Why is every result becoming "Adult"?

/* 14-2: Broken Conditional (2) */

function canApply(age, hasNID) {
  if (age >= 18 && hasNID) {
    return "Eligible";
  }

  return "Not Eligible";
}

// console.log(canApply(35, true));
// console.log(canApply(15, true));
// console.log(canApply(18, true));

// Brainstorming:
// 1) Should BOTH conditions be true to apply?
// 2) Are we using the correct logical operator?





/* 14-3: Broken Conditional (3) */

// Condition:
// - Scholarship: 90% or more attendance AND 80 or more assignment marks.
// - Final Exam: 80% or more attendance AND 50 or more assignment marks.
// - Otherwise, Not Eligible.

function canAttendFinalExam(attendance, assignmentMark) {
  if (attendance >= 90 && assignmentMark >= 80) {
    return "Eligible with Scholarship";
  } else if (attendance >= 80 && assignmentMark >= 50) {
    return "Eligible for Final Exam";
  } else {
    return "Not Eligible";
  }
}

console.log(canAttendFinalExam(90, 80));
console.log(canAttendFinalExam(85, 45));
console.log(canAttendFinalExam(80, 50));

// Brainstorming:
// 1) Should exactly 90% attendance and 80 assignment marks qualify for the scholarship?
// 2) Are we using the correct comparison operators in both conditions?
