// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const cart = 1200;
const isMember = true;

if (cart > 1000) {
    if (isMember === true) {
        console.log("==== Get 20% Discount ====")
        discountAmount = (cart * 20) / 100;
        payableAmount = cart - discountAmount;
        console.log("Your Bill is - ", cart, "After 20% discount Your bill is - ", payableAmount)
    }
    else {
        console.log("==== Get 10% Discount ====")
        discountAmount = (cart * 10) / 100;
        payableAmount = cart - discountAmount;
        console.log("Your Bill is - ", cart, "After 10% discount Your bill is - ", payableAmount)
    }
}
else {
    console.log("NO Discount")
    console.log("Your Bill is - ", cart)
}


// ==================================== Use logical operators combined with if-else if.=====================================================

if (cart >= 1000 && isMember === true) {
    console.log("==== Get 20% Discount ====")
    discountAmount = (cart * 20) / 100;
    payableAmount = cart - discountAmount;
    console.log("Your Bill is - ", cart, "After 20% discount Your bill is - ", payableAmount)
}
else if (cart >= 1000) {
    console.log("==== Get 10% Discount ====")
    discountAmount = (cart * 10) / 100;
    payableAmount = cart - discountAmount;
    console.log("Your Bill is - ", cart, "After 10% discount Your bill is - ", payableAmount)
}
else {
    console.log("NO Discount")
    console.log("Your Bill is - ", cart)
}