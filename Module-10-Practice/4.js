// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both. 

let mixedArray = [1, "two", 3, "four", 5, "six"];
let numberArray = [];
let stringArray=[];

for(let i =0;i<mixedArray.length;i++){
    if(typeof mixedArray[i] === "number"){
        numberArray.push(mixedArray[i]);
    }
    else{
        stringArray.push(mixedArray[i]);
    }
}
console.log("Numbers: ", numberArray);
console.log("Strings: ", stringArray);