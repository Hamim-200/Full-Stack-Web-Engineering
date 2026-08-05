function sayGreet(name){
    return `Hello ${name}, Good Morning`
}

console.log(sayGreet("Rabbi"));


// Arrow Function

const sayHello = ()=>{
    return `Hello ${name}, Good Morning`
}
console.log(sayGreet("Ramim"));

//Implicit return
const sayBye = (name)=> `Have a safe Journey ${name}, See you again..` 
console.log(sayBye("Ria"))


const sumFirstThenMultiplyByThree = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};
console.log(sumFirstThenMultiplyByThree(5,5));

// for empty and multiple parameter -> first bracket is required
// for single parameter -> first bracket is optional


const student = {
    name: "Utsho",
    age: 26,
    showName: function(){
        console.log(this);
        return `Name: ${this.name}. Age: ${this.age}`
    },
    showAge: ()=> {
        console.log(this);
        return `Age: ${this.age}`
    }
}

console.log(student.showName());
console.log(student.showAge());