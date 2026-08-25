// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop). 

let array = [3, 5, 1, 8, 2, 7];
let largest = array[0];
let smallest = array[0];

for(let i =1;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i];
    }
    if(array[i]<smallest){
        smallest=array[i];
    }
}

console.log("Largest value:", largest);
console.log("Smallest value:", smallest);   