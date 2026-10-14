// Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].

function getLastElement <T>(arr: T[]): T | undefined{
    return arr[arr.length-1];
}

console.log(getLastElement<number>([10, 20, 30])); // 30
console.log(getLastElement<string>(["a", "b", "c"])); // "c"
