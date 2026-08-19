"use strict";
// function useState(initialValue) {
//     let value = initialValue;
Object.defineProperty(exports, "__esModule", { value: true });
//     function setValue(newValue) {
//         value = newValue;
//     }
//     return [value, setValue]
// }
// const [counter, setCounter] = useState(0);
// console.log(counter)
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    // return [value]
    return [value, setValue];
}
useState("Hello World");
useState(42);
useState(false);
useState({ email: "user@example.com", isLoggedIn: false });
useState(null);
//# sourceMappingURL=generics2.js.map