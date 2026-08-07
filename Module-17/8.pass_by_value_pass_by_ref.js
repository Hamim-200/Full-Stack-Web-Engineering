

// Pass by value (pass by primitive data type)
let name = "Utsho"
let age = 26

function myFunc(myName, myAge){
    myName  = "Habib Utsho"
    myAge = 45;
    console.log(myName, myAge);
}

// myFunc(name, age)

// console.log(name, age);


// Pass by reference (pass by Referencial data type)
let student = {
    name: "Utsho",
    roll: 29
}
function myFunc2(data){

    data.name = "Habib Utsho"
    // data = {name: "Habib Utsho", roll: 35}
    console.log(data);
}
myFunc2(student)
console.log(student);