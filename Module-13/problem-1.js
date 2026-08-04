// Problem-1: Check if a number is even or odd


// WITHOUT FUNCTION
let number = 10;
if(number % 2 === 0){
    console.log("EVEN")
}
else{
    console.log("ODD")
}


// USING FUNCTION
function oddEven(num){
    if(num % 2 === 0){
        return "EVEN";
    }
    else{
        return "ODD"
    }
}

console.log(oddEven(5))