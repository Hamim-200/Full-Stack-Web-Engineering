function half(num){
    const halfNum = num/2;
    console.log(halfNum);
}
half(10);


function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result); // 8


// 1. how to declare function
function firstFunction(){

} 

// 2. how to call a function
firstFunction();


// 3. how to deal with parameter
function divide(num1, num2){
    const result = num1 / num2;
    console.log('divide result', result)
}

divide(500, 8);

// 4. how to deal with return
function doMath(a, b, c, d){
    const firstSum = a + b;
    const secondSum = c + d;
    const multiplied = firstSum * secondSum;
    const divided = multiplied / 4;
    return divided;
}

const result2 = doMath(4, 8, 16, 24);

// 5. call function with variable
const denominator = 2;
divide(result2, denominator);