const laptop = {
    brand: 'HP',
    weigh: 350,
    color: 'Silver',
    ram:'4GB',
    isSlim: false,
    isStrong: true,
    appsList: ['FB', 'Instagram','Youtube']
}
// console.log(laptop)

// Dot Notation
console.log(laptop.color)

// Set value
laptop.weigh = 230;
laptop.isStrong = false;
console.log(laptop)

// Bracket Notation
console.log(laptop["ram"]); 