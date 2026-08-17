const user = {
    name: 'john',
    age: 30,
    isAdmin: true
}

// const { age, name, isAdmin } = { name: 'john', age: 30, isAdmin: true }

const { age, isAdmin: adminStatus } = user;

const userInfo = ['Rohomot Ali', 25];
const [, userAge] = ['rohomot', 25];