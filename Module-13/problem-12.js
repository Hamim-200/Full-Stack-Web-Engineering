// Problem 12: Filter Numbers Greater Than a Value

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 65, 69, 100];
let value = 65;

let filteredArray = [];


for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
        filteredArray.push(arr[i]);
    }
}

console.log(filteredArray);


// with function
function getFilteredArray(arr, value) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > value) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

console.log(getFilteredArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 80));
console.log(getFilteredArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10));