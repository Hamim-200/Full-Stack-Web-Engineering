// Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price. 

interface NewProduct {
    title: string;
    price:number;
    inStoke?: boolean;
}


const laptop: NewProduct = { title: "Laptop", price: 55000 };
const mouse: NewProduct = { title: "Mouse", price: 500, inStoke: true };

function logPrice(product: NewProduct) : void{
    console.log(product.price);
}

logPrice(laptop);
logPrice(mouse)