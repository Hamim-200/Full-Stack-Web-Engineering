function splitFirstRest(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
}

console.log(splitFirstRest([10, 20, 30, 40])); // { first: 10, rest: [20, 30, 40] }
