// 1. Create an array with 3 items of your choice. 
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

// 2. Log the length of the array 
console.log("Length Of The Array :", fruits.length)

// 3. Log the item at index 0 and index 2 of the array.
console.log(fruits[0]); //Apple
console.log(fruits[2]); //Banana

// 4. Change the item at index 1 to a new value. Log the array.
fruits[1] = "Lichi"
console.log(fruits);

// 5. Add one item to the end of the array
fruits.push("Grape");
console.log(fruits);

// 6. Remove the last item from the array. Log the array and the removed value. 
let removedLast = fruits.pop();
console.log(fruits);
console.log(removedLast);

// 7. Add one item to the start of the array.
fruits.unshift("Mango");
console.log(fruits);

// 8. Remove the first item from the array.
let removeFirst = fruits.shift();
console.log(fruits);
console.log(removeFirst);

// 9. Check whether the array contains a specific value. Log true or false.
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Orange"));

// 10. Find the position of a specific value in the array. Log the number.
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Banana"));

// 11. Loop through the array with a for loop and log each item. 
for (let i = 0; i < fruits.length; i++) {
    console.log(i, "->", fruits[i]);
}

// 12. Loop through the array with a while loop and log each item. 
let i = 0;
while (i < fruits.length) {
    console.log(i, "->", fruits[i]);
    i++;
}