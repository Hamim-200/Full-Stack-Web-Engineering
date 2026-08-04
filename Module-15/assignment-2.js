//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...

    if (typeof teamAGoals === "number" && typeof teamBGoals === "number"){
        if(teamAGoals > teamBGoals){
            return "Team A Won"
        }
        else if(teamBGoals>teamAGoals){
            return "Team B Won"
        }
        else if(teamAGoals === teamBGoals){
            return "Draw"
        }
    }
   
    else{
        return "Invalid"
    }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    // Write your code here

    if(Array.isArray(weights) === false){
        return "Invalid";
    }

    let total = 0;
    for (const weight of weights){
        total = total + weight;
    }
    if(total<=400){
        return true
    }
    else{
        return false
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    // Write your code here.

    if( typeof tokensUsed !== "number" || tokensUsed<0){
        return "Invalid"
    }
    if(tokensUsed <= 500){
        return 0;
    }
    else{
        let extra = tokensUsed - 500;
        let prize = Math.floor(extra / 100);
        let totalPrice = prize * 5;
        return totalPrice;
    }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    // Write your code here

    if(Array.isArray(restaurants) === false || restaurants.length === 0 ){
        return "Invalid";
    }

    let toprating = restaurants[0];
    for(let i= 0; i<restaurants.length; i++){
        if(restaurants[i].rating > toprating.rating ){
            toprating = restaurants[i];
        }
    }
    
    let resturantname = toprating.name.toUpperCase();
    return resturantname

}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    else if (times.length === 0) {
        return "Invalid";
    }
    for (let time of times){
        if(typeof time !== "number"){
            return "Invalid";
        }
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

  return total / times.length;
}

