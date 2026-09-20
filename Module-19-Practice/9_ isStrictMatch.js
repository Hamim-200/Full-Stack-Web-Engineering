function isStrictMatch(input, target) {
    return input === target;
}

console.log(isStrictMatch("18", 18))
console.log(isStrictMatch(18, 18))
console.log(isStrictMatch(19, 18))