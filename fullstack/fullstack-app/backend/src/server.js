// Importing required packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

// Importing required files
const routes = require('./routes')

const app = express() // Setup server for app requiring express
const PORT = process.env.PORT || 8000

// Checking if in production or dev environment
if(process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, "..", "files")))

// Connecting to MongoDB by reading .env file if in dev environment
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