const subject = 'Chemistry';
const book = 'chemistry';

console.log(book.toUpperCase())
console.log(book.toLowerCase())

const emailUserProvided = '  goni@MIA.com  '
const emailSavedInDatabase = 'goni@mia.com'

if (emailUserProvided.toLowerCase() === emailSavedInDatabase.toLowerCase()) {
    console.log("Matched Email")
}


console.log(emailUserProvided.trimStart())
console.log(emailUserProvided.trim().toLocaleUpperCase())

