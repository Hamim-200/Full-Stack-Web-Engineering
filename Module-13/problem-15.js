// Problem 15: Return All Even Numbers, Then Their Sum

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

// let evenNumbers = [];
// for(let i =0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         evenNumbers.push(arr[i]);
//     }
// }
// sum = 0;
// for(let key of evenNumbers){
//     sum = sum + key;
// }
// console.log(sum);


// With function
function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // console.log(arr[i]);
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

function getSum(arr) {
  let sum = 0;
  for (let key of arr) {
    console.log(key);
    //   sum = sum + key;
    sum += key;
  }

  return sum;
}

let evenNumbers = getEvenNumbers(arr);
let sum = getSum(evenNumbers);
console.log("sum: -> ", sum);