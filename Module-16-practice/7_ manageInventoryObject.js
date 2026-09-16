function manageInventoryObject(obj, action) {
    const isPlainObject = obj !== null && typeof obj === "object" && !Array.isArray(obj);

    if (!isPlainObject) return "Invalid";

    if (action === "keys") return Object.keys(obj);
    if (action === "values") return Object.values(obj);
    if (action === "entries") return Object.entries(obj);
    if (action === "seal") return Object.seal(obj);
    if (action === "freeze") return Object.freeze(obj);

    if (typeof action === "string" && action.startsWith("delete:")) {
        const propName = action.split(":")[1];
        const newObj = { ...obj };
        delete newObj[propName];
        return newObj;
    }

    return "Invalid";
}


console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"))
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"))
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"))
console.log(manageInventoryObject({ a: 1 }, "shrink"))