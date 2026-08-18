type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [{
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1"
},
{
    id: 2,
    name: "Product 2",
    price: 15.99,
    description: "This is product 2"
},
{
    id: 3,
    name: "Product 3",
    price: 20.99,
    description: "This is product 3"
}]