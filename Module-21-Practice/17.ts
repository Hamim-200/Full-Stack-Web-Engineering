// ● type-safe function িদেয় total price calculate কেরা। 

function calculateTotal(items: { price: number; quantity: number }[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const cart2 = {
    items: [
        { price: 100, quantity: 2 },
        { price: 50, quantity: 3 },
        { price: 200, quantity: 1 }
    ]
};

console.log(calculateTotal(cart2.items)); 
