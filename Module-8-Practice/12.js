// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login". 

const isLoggedIn = true;
const isAdmin = true;


if (isLoggedIn === true){
    if(isAdmin === true){
        console.log("ADMIN DASHBOARD")
    }
    else{
        console.log("USER DASHBOARD")
    }
}
else{
    console.log("PLEASE LOGIN")
}