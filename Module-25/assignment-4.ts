//Problem-01: Battery Level Status
const getBatteryStatus = (percentage: number): string => {
    // write your code here
    if (percentage <= 20) {
        return "Low";
    }
    else if (percentage <= 50) {
        return "Medium";
    }
    else if (percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
};

//Problem-02: Table Booking Confirmation
interface Booking {
    name: string;
    guests: number;
    time: string;

}

const formatBookingConfirmation = (booking: Booking): string => {
    // write your code here
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
    let total = 0;
    for (let amount of expenses) {
        total = total + amount;
    }
    return total;
    // write your code here
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";
const getTrafficAction = (light: Light): string => {
    // write your code here
    if (light === "red") {
        return "Stop"
    }
    else if (light === "yellow") {
        return "Slow Down"
    }
    else {
        return "Go"
    }

};

//Problem-05: Quiz Score Summary
interface QuizMarks {
    total: number;
    average: number;
}


const getQuizSummary = (scores: number[]): QuizMarks => {
    // write your code here
    let total = 0;
    for (let score of scores) {
        total = total + score;
    }
    let average = 0;
    if (scores.length > 0) {
        average = total / scores.length;
    }
    return {
        total: total,
        average: average
    };
};

