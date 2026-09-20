
function getAvailableProducts(products) {
    return products.filter(product => product.stock > 0);
}

console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, {
    name: "Notebook", stock: 2
}]))