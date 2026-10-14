// Problem statement: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.


const appConfig = { theme: "dark", version: 2 } as const;
// appConfig.theme = "light";
// Error: Cannot assign to 'theme' because it is a read-only property.
 
const colors = ["red", "green", "blue"] as const;
type Color = (typeof colors)[number]; // "red" | "green" | "blue"
const favorite: Color = "green";
console.log(appConfig, favorite);
// const wrong: Color = "yellow"; // Error: not assignable to type Color