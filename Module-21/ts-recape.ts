const destination: string = "Dinajpur";
const money: number = 1000;

const countries: string[] = ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan"];

function buyBook(title: string, price: number, discount?: number): string {
    if (discount === undefined) {
        discount = 0;
    }
    return `You bought the book "${title}" for $${price - discount}.`;
}


const tubeLights: {
    brand: string;
    price: number;
    color: string;
    isEnergyEfficient: boolean;
} = {
    brand: "Philips",
    price: 20,
    color: "White",
    isEnergyEfficient: true,
} 

console.log(tubeLights.brand); // Output: Philips

//Union String | Number | boolean | NULL