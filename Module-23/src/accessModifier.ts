// access modifier:  public, private, protected
class BkashAccount {
    public phone: string
    private balance: number
    private pin: number
    protected history: any = []

    constructor(phone: string, balance: number, pin: number) {
        this.phone = phone
        this.balance = balance
        this.pin = pin
    }

    getBalance(pin: number) {
        if (this.pin === pin) {
            return this.balance
        }

        return `PIN is wrong!`
    }

}

const bkashAcc = new BkashAccount("01234567", 5000, 123)


console.log(bkashAcc.getBalance(123))

console.log(bkashAcc.balance, bkashAcc.pin)