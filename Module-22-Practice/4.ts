// Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod. 


type PaymentMethod = "cash" | "card" | "mobile";


// An interface can't express this because an interface describes the SHAPE of an object . it can't represent a union of literal values like cas , card mobile only a type alias can do that.

interface Order{
    id: number;
    method: PaymentMethod;
}

let method: PaymentMethod = "card";
const order : Order = {id: 1, method};
console.log(order)