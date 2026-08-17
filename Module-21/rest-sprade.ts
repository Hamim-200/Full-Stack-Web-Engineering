const device = {
    name: 'iPhone',
    price: 1000,
    color: 'black',
    storage: '128GB'
}

const { name: deviceName, ...deviceInfo } = device;


const numbers3: number[] = [1, 2, 3, 4, 5];
const newNumbers: number[] = [ 6, 7, 8];
const closeFriends: string[] = ['Alice', 'Bob', 'Charlie'];

const allNumbers: number[] = [...numbers3, ...newNumbers];