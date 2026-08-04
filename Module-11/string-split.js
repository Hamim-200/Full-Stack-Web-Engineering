const companiesStr = 'Tesla SpaceX Paypal';
const companies = companiesStr.split('');
console.log(companies) //[ 'T', 'e', 's', 'l', 'a',' ', 'S', 'p', 'a', 'c', 'e', 'X', ' ', 'P', 'a','y', 'p', 'a', 'l']

const companies2 = companiesStr.split(' ');
console.log(companies2) //[ 'Tesla', 'SpaceX', 'Paypal' ]

const companies3 = companiesStr.split(', ');
console.log(companies3) //[ 'Tesla SpaceX Paypal' ]


// const againStr = companies.join(' ')
// console.log(againStr)