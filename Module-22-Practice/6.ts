// Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>. 

interface Container<T>{
    item: T;
}

const numberBox: Container<number> = {item:100};
const stringBox: Container<string> = {item:"Books"};

console.log(numberBox); // { item: 100 }
console.log(stringBox); // { item: "Books" }