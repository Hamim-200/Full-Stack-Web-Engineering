function getTotalStockValue(products){
    return products.reduce((total,p) => total + p.price * p.stock,0);
}

console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }] ))