// Task 4: swapValues — Destructuring

function swapValues(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

console.log(swapValues(5, 10)); // [10, 5]
