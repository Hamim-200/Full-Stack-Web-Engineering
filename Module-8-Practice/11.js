// Using age and hasID, use nested if-else to check whether someone is eligible to vote. 


const age = 19;
const hasID = true;

if (age >= 18) {
    if(hasID === true){
        console.log("You are Eligable to vote")
    }
    else{
        console.log("Make your voter card to give vote")
    }
}
else{
    console.log("You Are Bellow age to give vote")
}