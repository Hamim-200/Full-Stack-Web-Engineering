class info {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log(`My name is ${this.name}`);
    }
}


// const newInfo = new info("Hamim");
// newInfo.introduce();

class Student {
    name: string
    email: string
    age: number
    marks: number

    //constructor ---> special method
    constructor(name: string, email: string, age: number, marks: number) {
        this.name = name
        this.email = email
        this.age = age
        this.marks = marks
    }

    // Method
    getInfo(): string {
        const info = `Name: ${this.name}\nEmail: ${this.email}`
        return info
    }

}
// const sadia = new Student("Sadia", "sadia@gmail.com", 17, 200)
// console.log(sadia.getInfo())

class ChaShop {
    title: string
    soldItems: any = []


    constructor(title: string) {
        this.title = title
    }


    buy(name: string, price: number) {
        this.soldItems.push({ name, price })
    }

    totalSold() {
        const total = this.soldItems.reduce((acc, item) => acc + item.price, 0)
        return total
    }


}


const shop1 = new ChaShop("Tea Shop")
shop1.buy("Tea", 10)
shop1.buy("Cake", 15)

console.log(shop1.totalSold())