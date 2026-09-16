function printObjectDetails(obj, loopType) {
    const result = [];

    if (loopType === "forin") {
        for (const key in obj) {
            result.push(`${key}: ${obj[key]}`);
        }
        return result;
    }

    if (loopType === "forofentries") {
        for (const [key, value] of Object.entries(obj)) {
            result.push(`${key}: ${value}`);
        }
        return result;
    }

    if (loopType === "entriesDestructure") {
        return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
    }

    return "Invalid";
}


console.log(printObjectDetails({ fruit: "Mango", price: 50 }, "forin"))
console.log(printObjectDetails({ fruit: "Mango", price: 50 }, "entriesDestructure"))
console.log(printObjectDetails({}, "loopThrough"))