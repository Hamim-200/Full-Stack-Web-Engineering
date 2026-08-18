interface Employee {
    id: number;
    name: string;
    position: string;
    salary?: number;
}

const mark: Employee = {
    id: 1,
    name: "Mark",
    position: "Software Engineer",
    salary: 80000
}

const bill: Employee = {
    name: "Bill",
    id: 102,
    position: "Sales"
}


const team: Employee[] = [mark, bill, {
    name: "John",
    id: 103,
    position: "Manager",
    salary: 90000
}];


function getEmployeeInfo(employee: Employee): void {
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee Name: ${employee.name}`);
}

getEmployeeInfo({ name: 'Elon', position: 'SpaceX', id: 101 });


function displayEmployeeDetails({ name, id, position }: Employee): void {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department: ${position}`);
}
displayEmployeeDetails({ name: 'Elon', position: 'spaceX', id: 101 });
displayEmployeeDetails(mark);