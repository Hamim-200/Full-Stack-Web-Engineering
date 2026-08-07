function registerStudent(cb) {
    console.log("User is registering. Need more data.");
    //   console.log(cb);
    cb();
}

function userBasicInfo() {
    let student = {
        name: "Utsho",
        age: 26,
        roll: 29,
    };
    console.log(student);
}

function pastAcademicInfo() {
    let academicInfo = {
        ssc: "5.00",
        hsc: "5.00",
    };
    console.log(academicInfo);
}

console.log(registerStudent(userBasicInfo));
console.log(registerStudent(pastAcademicInfo));


function calculator(a, b, cb) {
    let sum = a + b;
    cb(sum)
}

function displayResult(result) {
    console.log(result);
}

calculator(5, 5, displayResult)
calculator(50, 10, displayResult)