// Task 3: getLowestPrice — Spread Operator

function getLowestPrice(prices) {
    return Math.min(...prices);
}

console.log(getLowestPrice([340, 120, 560, 90])); // 90