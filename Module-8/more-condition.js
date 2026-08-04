const marks = 95;

if (marks > 80) {
    console.log('A+');
}
else if (marks > 70) {
    console.log('B+');
}
else if (marks > 60) {
    console.log('C+');
}
else if (marks > 50) {
    console.log('D+');
}
else {
    console.log('F');
}


const totalAmount = 5000;

if (totalAmount > 5000) {
    const discount = 30;
    const discountAmount = totalAmount / 100 * discount;
    const payment = totalAmount - discountAmount;
    console.log(payment);
}
else if (totalAmount > 1000) {
    const discount = 10;
    const discountAmount = totalAmount / 100 * discount;
    const payment = totalAmount - discountAmount;
    console.log('please pay: ', payment);
}