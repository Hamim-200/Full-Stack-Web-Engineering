// Task 10: cloneAndUpdate — Spread (Immutable Array Update)

function cloneAndUpdate (arr,index,newValue){
    const newArr = [...arr];
    newArr[index] = newValue;
    return newArr;
}


const original = [5, 10, 15];
const updated = cloneAndUpdate(original, 1, 99);
console.log(updated);  // [5, 99, 15]
console.log(original); // [5, 10, 15] (unchanged)