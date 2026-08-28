// Input: a number 
// Output: true or false 
// Returns: a boolean 
  
function isPerfectSquare(num) { 
  // TODO: write your logic here 
  let root = Math.sqrt(num);
  return Number.isInteger(root);
  
} 
  
console.log(isPerfectSquare(16)); // Expected: true 
console.log(isPerfectSquare(20)); // Expected: false 