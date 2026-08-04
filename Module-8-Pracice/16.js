// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

const username = 'hamim';
const password = 1234;
const role = "Admin";

const givenUsername = 'hamim';
const givenPassword = 1234;


if (username === givenUsername && password === givenPassword) {
    console.log("Login Successful")

    if (role === "Admin") {
        console.log("Login To Admin Dashboard")
    }

    else if (role === "Editor") {
        console.log("Login to Editor Dashboard")
    }

    else {
        console.log("Login To User Dashboard")
    }

    const access = (role === "Admin") ? "Full Access" : "Partial"
    console.log("You are", role, "Your access is - ", access)
}
else {
    console.log("Incorrect password or username")
}