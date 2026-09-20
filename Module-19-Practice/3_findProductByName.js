function  findProductByName(products,name){
    return products.find(product => product.name === name);
}

console.log(findProductByName(products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag"))