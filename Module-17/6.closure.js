function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    };
}

let counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())



function cashRegister() {
  let amount = 0;

  return function (payableAmount) {
    amount += payableAmount;
    return amount;
  };
}

let coffeeShopCashCounter = cashRegister();
let restaurantCashCounter = cashRegister();
let juiceBarCashCounter = cashRegister();

console.log("Coffeshop: " ,coffeeShopCashCounter(200));
console.log("Coffeshop: " ,coffeeShopCashCounter(100));
console.log("Coffeshop: " ,coffeeShopCashCounter(500));

console.log("Restaurant: " ,restaurantCashCounter(50));

console.log("Coffeeshop: " ,coffeeShopCashCounter(100));

console.log("Juicebar: " ,juiceBarCashCounter(250));