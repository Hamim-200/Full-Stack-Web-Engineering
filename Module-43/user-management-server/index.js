import express from "express";
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('User are coming');
})

const users = [
    { id: 1, name: 'Imran', email: 'imran@gmail.com' },
    { id: 2, name: 'Rahim', email: 'rahim@gmail.com' },
    { id: 3, name: 'Karim', email: 'karim@gmail.com' },
    { id: 4, name: 'Sakib', email: 'sakib@gmail.com' },
    { id: 5, name: 'Nusrat', email: 'nusrat@gmail.com' }
];

app.get('/users', (req, res) => {
    res.send(users);
})


app.post('/users', (req, res) => {
    console.log('data from client ', req.body);
    const newUser = req.body;

    //Temorary data storage
    newUser.id = users.length + 1;
    users.push(newUser);


    res.send({ success: true, message: 'User added successfully' });
})

app.listen(PORT, () => [
    console.log(`Server is running on Port ${PORT}`)
])

