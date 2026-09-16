function generateReceipt(customerName, items, total) {
    if (!Array.isArray(items) || items.length === 0) {
        return "Invalid";
    }
    return `Receipt for ${customerName}\nItems: ${items.join(", ")}\nTotal: ৳${total}`;
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150))