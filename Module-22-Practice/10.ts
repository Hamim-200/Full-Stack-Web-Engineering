// Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">. 

interface Employee {
  name: string;
  id: number;
  salary: number;
  department: string;
}
 
function updateEmployee(updates: Partial<Employee>): void {
  console.log(updates);
}
updateEmployee({ name: "Rafi" }); // { name: "Rafi" }
 
type EmployeeBasic = Pick<Employee, "name" | "id">; // { name; id }
type EmployeePublic = Omit<Employee, "salary">; // { name; id; department }
 
const basic: EmployeeBasic = { name: "Rafi", id: 1 };
const publicInfo: EmployeePublic = { name: "Rafi", id: 1, department: "IT" };
console.log(basic, publicInfo);