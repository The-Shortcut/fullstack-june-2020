const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const skillRouter = require('./controllers/skills')
const app = express()

app.use(express.json())

mongoose.connect(config.mongoDB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then( () => console.log('connecting to mongoDB'))
    .catch( err => console.log(err.message))

app.use('/skills', skillRouter )

module.exports = app