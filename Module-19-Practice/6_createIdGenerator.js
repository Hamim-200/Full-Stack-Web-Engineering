function createIdGenerator() {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    };
}
const nextId = createIdGenerator();
console.log(nextId()); // 1
console.log(nextId()); // 2
console.log(nextId()); // 3