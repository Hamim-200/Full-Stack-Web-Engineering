// Task 6: promoteEmployee — Spread + Immutable Update


function promoteEmployee(employee, newTitle) {
    return { ...employee, title: newTitle };
}

const emp = { name: "Rafi", title: "Junior Dev" };
const promoted = promoteEmployee(emp, "Senior Dev");
console.log(promoted); // { name: "Rafi", title: "Senior Dev" }
console.log(emp); //{ name: "Rafi", title: "Junior Dev" }