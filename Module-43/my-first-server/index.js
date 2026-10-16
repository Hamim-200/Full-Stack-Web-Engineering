import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World from express js')
})

app.get('/about', (req, res) => {
    res.send("About Page")
})
app.get('/dashboard', (req, res) => {
    res.send("Dashboard Page")
})
app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 
