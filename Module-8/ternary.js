const age = 20;
if (age >=18){
    console.log("voter")
}
else{
    console.log("Not voter")
}

age >=18 ? console.log("Voter") : console.log("Not Voter" )


//--------------------------------------------------

let price = 500;
const isLeader = false;

// if (isLeader) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log('price is: ', price);


price = isLeader ? 0 : price + 100;
console.log('Price now: ', price)