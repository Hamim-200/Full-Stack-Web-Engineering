enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let offDay = Day.Sunday;
console.log(offDay); // Output: 0


if(offDay === Day.Sunday || offDay === Day.Friday){

}


enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator',
    Guest = 'Guest'
}

console.log(Roles.Admin)

const nandu = {
    name: 'chandu',
    role: Roles.Moderator
}

console.log(nandu)

enum Priority {
    Low,
    Moderate,
    Medium,
    High,
    Urgent
}