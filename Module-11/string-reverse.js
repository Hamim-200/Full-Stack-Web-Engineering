const commitment = 'I will work hard and will never give up.'
// reverse  this = '.pu evig reven'

const parts = commitment.split('');
const reversedParts = parts.reverse();
const reverseCommitment = reversedParts.join('');

// console.log(parts);
// console.log(reversedParts);
console.log(reverseCommitment) //.pu evig reven lliw dna drah krow lliw I


let reverseCom = '';
for(const letter of commitment){
    reverseCom = letter + reverseCom;
}
console.log(reverseCom);