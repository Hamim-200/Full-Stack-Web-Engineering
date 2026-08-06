// 1. Primitive data type: string, number, boolean, undefined, null

let name = "Wasif";
let name2 = name;
let age = 28;
let isVoter = true;
let driving = undefined;
let salary = null;

// console.log(typeof name, typeof age, typeof isVoter, typeof driving, typeof salary);



// 2. Non primitive data type: function , object and array

let pcConfig = {
    pcName : "Dell",
}


let arr = [10,20,30];

function add(a,b){
    return a*b;
}
// console.log (typeof pcConfig, typeof arr, typeof add);


// NON PREMITIVE
name = "Habib"
console.log(name2); //Wasif

// PREMITIVE
let pcConfig2 = pcConfig;
pcConfig.cost = 26000
console.log(pcConfig2);
