const college = {
    name: 'vnc',
    address: 'baily road',
    students: 800,
    events: ['21 Feb', 'Independence day', 'Victory Day'],
    people: {
        count: 200,
        principal: {
            name: 'Sabura mam',
            yearsOfExperience: 25,
            degree: 'English'
        }
    }
}

console.log(college)
console.log(college.students)
console.log(college.people)
console.log(college.people.count)//200
console.log(college.people.principal.degree)//English

console.log(college['people']['principal'].name); //Sabura mam

college.events[2] = 'Eid ul adha'
console.log(college.events)