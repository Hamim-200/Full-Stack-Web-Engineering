// Problem - 2: Sum of a Range (1  to N) 

function rangeSum (range){
    let sum = 0;
    for(let i = 1; i<=range; i++ ){
        sum = sum + i;
    }
    return sum;
}
console.log(rangeSum(20))