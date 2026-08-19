"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mark = {
    id: 1,
    name: "Mark",
    position: "Software Engineer",
    salary: 80000
};
const bill = {
    name: "Bill",
    id: 102,
    position: "Sales"
};
const team = [mark, bill, {
        name: "John",
        id: 103,
        position: "Manager",
        salary: 90000
    }];
function getEmployeeInfo(employee) {
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee Name: ${employee.name}`);
}
getEmployeeInfo({ name: 'Elon', position: 'SpaceX', id: 101 });
function displayEmployeeDetails({ name, id, position }) {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department: ${position}`);
}
displayEmployeeDetails({ name: 'Elon', position: 'spaceX', id: 101 });
displayEmployeeDetails(mark);
//# sourceMappingURL=interface.js.map