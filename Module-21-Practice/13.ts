// একটি shopping cart object বানাও।

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

interface ShoppingCart {
    owner: string;
    items: CartItem[];
}

const cart: ShoppingCart = {
    owner: "Jaima",
    items: [
        { name: "Laptop", price: 45000, quantity: 1 },
        { name: "Mouse", price: 500, quantity: 2 },
    ],
};
console.log(cart)