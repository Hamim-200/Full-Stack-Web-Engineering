// Task 2: buildProfileCard — Template Literals

function buildProfileCard({name,title,company}){
    return `${name} \n ${title} at ${company}`;
}

console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));
