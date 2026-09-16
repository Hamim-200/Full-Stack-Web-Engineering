// Task 7: sumAllPrices — for...of

function sumAllPrices(prices){
    let total = 0;
    for(const price of prices){
        total += price;
    }
    return total;
}

console.log(sumAllPrices([100, 250, 75])); // 425
