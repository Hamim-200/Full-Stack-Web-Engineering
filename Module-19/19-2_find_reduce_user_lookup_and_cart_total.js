/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

let findUserById = (users, id) => {
  let expectedUser = users.find((user) => {
    return user.id === id;
  });
  if (expectedUser) {
    return expectedUser;
  }
  else {
    return "User was not Found"
  }
}


let users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Utsho" },
  { id: 4, name: "Rahim" },
];
console.log(findUserById(users, 6));





/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/



// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160


let getCartTotal = (cart) => {
  let total = cart.reduce((accumulator, elem) => {
    return accumulator + (elem.price * elem.qty)
  }, 0)
  return total;
}


let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Speaker", price: 500, qty: 2 },
  { name: "Perfume", price: 2500, qty: 1 },
];

// Total = 20 * 3 + 50 * 2 = 160
console.log(getCartTotal(cart));