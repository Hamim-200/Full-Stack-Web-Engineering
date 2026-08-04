// array.splice(start, deleteCount, item1, item2, ...)

const fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits.splice(1, 2);

console.log(fruits);//["Apple", "Mango"]


// const fruits = ["Apple", "Banana", "Mango"];
fruits.splice(2, 0, "Orange");
console.log(fruits); //["Apple", "Banana", "Orange", "Mango"]