function sortByPriceAscending(products) {
    return [...products].sort((a, b) => a.price - b.price)
}

console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, {
    name: "Notebook", price:60
}]))