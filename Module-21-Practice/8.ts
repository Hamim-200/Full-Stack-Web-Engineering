// দুইটি array merge কেরা spread operator ব্যবহার কের। 

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

const merged: number[] = [...arr1,...arr2];
console.log(merged);
