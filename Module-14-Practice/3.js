// Bug: this loop never ends — find the missing piece 

function countUpTo(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) { // something is missing here 
        count = count + 1;
    }

    return count;
}

console.log(countUpTo(6)); // Expected: 5 (currently freezes/never finishes) 