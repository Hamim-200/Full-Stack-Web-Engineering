// Flatten a nested array (array containing arrays) into a single flat array. 

let nestedArray =  [1,[2,3],[4,[5,6]]] 
let flatArray = nestedArray.flat(Infinity);
console.log(flatArray);