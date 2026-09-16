// Task 1: calculateBill — Default Parameters
function calculateBill(amount, taxRate = 0.05) {
    return amount + amount * taxRate;
}
console.log(calculateBill(1000));       // 1050
console.log(calculateBill(1000, 0.10)); // 1100