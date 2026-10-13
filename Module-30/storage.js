localStorage.setItem("age", "24")
localStorage.setItem("location", "Dhaka")

const getLocationData = localStorage.getItem("location")
const getAgeData = localStorage.getItem("age") 

console.log(getLocationData);
console.log(getAgeData)


const myLocation = document.getElementById("location")
const age = document.getElementById("age")

myLocation.innerText = `Location:- ${getLocationData}`
age.innerText = `my Age:- ${getAgeData}`