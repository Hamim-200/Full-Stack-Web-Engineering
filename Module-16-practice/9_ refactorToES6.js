// Original ES5:
// var calculateTotal = function(items) {
//   var total = 0;
//   for (var i = 0; i < items.length; i++) {
//     total = total + items[i].price;
//   }
//   return 'Total: ' + total + ' Taka';
// };

const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return `Total: ${total} Taka`;
};

console.log("--- 9. calculateTotal (ES6 refactor) ---");
console.log(calculateTotal([{ price: 100 }, { price: 250 }])); // Total: 350 Taka
console.log(calculateTotal([{ price: 80 }]));                  // Total: 80 Taka

