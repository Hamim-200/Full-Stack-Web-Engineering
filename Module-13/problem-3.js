// Problem - 3: Factorial of a Number

function factorial (range){
    let fact = 1;
    for(let i = 1; i<=range; i++ ){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5))
 