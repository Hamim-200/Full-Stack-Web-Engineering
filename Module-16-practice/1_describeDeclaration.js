function describeDeclaration(keyword) {
    switch (keyword) {
        case "var":
            return "Can redeclare, can reassign "
        case "let":
            return "Cannot redeclare, can reassign"
        case "const":
            return "Cannot redeclare, cannot reassign"
        default:
            return "Invalid"

    }
}

console.log(describeDeclaration("var"))
console.log(describeDeclaration("const"))
console.log(describeDeclaration("let"))
console.log(describeDeclaration("lette"))