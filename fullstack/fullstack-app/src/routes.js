// Import required packages 
const express = require('express')
const multer = require('multer')

// Import controllers and config files
const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload')

// Creating instances
// Define middleware which allows us to route from different file
const routes = express.Router()
// Multer instance of our upload config to use functionality
const upload = multer(uploadConfig)

// Define routes using express' Router method
// Checking if app is running fine
routes.get('/status', (req, res)=> {
    res.send({ status: 200 })
})

// Event
// Event creation end point
routes.post('/event', upload.single("thumbnail") ,EventController.createEvent)

// User
// Registering 
routes.post('/user/register', UserController.createUser)
// Getting user By ID
routes.get('/user/:userId', UserController.getUserById)


// Export routes
module.exports = routes