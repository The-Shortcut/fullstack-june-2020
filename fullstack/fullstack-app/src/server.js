// Importing required packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserController = require('./controllers/UserController')

const app = express() // Setup server for app requiring express
const PORT = process.env.PORT || 8000

if(process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Hello from nodemon')
})

app.get('/register', (req, res)=> {
    res.send('Welcome to Register')
})

app.post('/register', UserController.store)

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully')
} catch(error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})