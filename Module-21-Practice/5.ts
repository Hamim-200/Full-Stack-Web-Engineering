// একটি user object বানাও যখােন name required, িকন্তু email optional। 

type UserInfo ={
    name: string;
    email?: string;
}
const user : UserInfo = {name:"Rahim"};
const user2 : UserInfo = {name:"Karim", email:"karim@gmail.com"};


console.log(`Name: ${user.name} | Email: ${user.email ?? "Not Given"}`)
console.log(`Name: ${user2.name} | Email: ${user2.email ?? "Not Given"}`)