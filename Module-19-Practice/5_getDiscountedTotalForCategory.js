function getDiscountedTotalForCategory(products, category) {
    return products.filter(p => p.category === category).map(p => p.price * 0.9).reduce((total, price) => total + price, 0);
}

console.log(getDiscountedTotalForCategory(products = [{ name: "Pen", category: "stationery", price: 100 }, {
    name: "Bag",
    category: "accessory", price: 500
}, {
    name: "Notebook", category: "stationery",
    price: 60
}], category = "stationery"))