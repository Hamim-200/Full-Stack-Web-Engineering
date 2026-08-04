// PUSH
const friends = ['balam', 'kalam', 'salam', 'gelam', 'khailam']
console.log(friends);
friends.push('ghumailam')
friends.push('mobailam')
console.log(friends);

// POP
const numbers = [12, 45, 145, 25, 78, 89, 94]
console.log(numbers);
const firstOut = numbers.pop();
console.log(numbers)
const secondOut = numbers.pop();
console.log(numbers)
console.log(firstOut, secondOut);

// SHIFT
const numbers2 = [12, 45, 145, 25, 78, 89, 94]
// numbers2.shift();
console.log(numbers2);

// UNSHIFT
numbers2.unshift(2000)
console.log(numbers2)

    