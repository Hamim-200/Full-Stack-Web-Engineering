function getTopSellingProduct(orders) {
  const totals = orders.reduce((acc, order) => {
    acc[order.product] = (acc[order.product] || 0) + order.unitsSold;
    return acc;
  }, {});

  return Object.entries(totals).reduce((top, [product, units]) =>
    units > top.units ? { product, units } : top,
    { product: null, units: -Infinity }
  ).product;
}


const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 }
];

console.log(getTopSellingProduct(orders)); // "Pen"