// Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status. 

enum OrderStatus{
    Placed = "PLACED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED",
}

function printStatus(status: OrderStatus):void{
    console.log(`Current Status is : ${status}`);
}

printStatus(OrderStatus.Shipped)