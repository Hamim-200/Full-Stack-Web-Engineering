// Problem 10: Find the Smallest Number in an Array


function smallestNumberFromArray(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        if (currentElement < smallest) {
            smallest = currentElement;
        }
    }
    return smallest;
}

console.log(smallestNumberFromArray([250, 20, 5, 64, 560, 1050, 1]));