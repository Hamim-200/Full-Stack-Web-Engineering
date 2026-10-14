// একটি TypeScript program বানাও যখােন একজন user-এর নাম, বয়স, email, skills, আর active status থাকেব। এরপর সব তথ্য print করেব। 


interface User {
    name: string;
    age: number;
    email: string;
    skills: string[];
    active: boolean;
}

const user3: User = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true,
};

// Print all information
console.log("Name:", user3.name);
console.log("Age:", user3.age);
console.log("Email:", user3.email);
console.log("Skills:", user3.skills);
console.log("Active:", user3.active);


