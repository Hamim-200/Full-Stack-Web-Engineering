const laptop = {
    brand: 'HP',
    weigh: 350,
    color: 'Silver',
    ram:'4GB',
    isSlim: false,
    isStrong: true,
    appsList: ['FB', 'Instagram','Youtube']
}
console.log(laptop)

const keys = Object.keys(laptop);
console.log(keys);

const value = Object.values(laptop);
console.log(value)


// Delete any Properties
delete laptop.isStrong;
console.log(laptop)

console.log(Object.entries(laptop));