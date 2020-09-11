// Import required packages 
const express = require('express')
const multer = require('multer')

// Import controllers and config files
const verifyToken = require('./config/verifyToken')
const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const DashboardController = require('./controllers/DashboardController')
const LoginController = require('./controllers/LoginController')
const RegistrationController = require('./controllers/RegistrationController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')
// const uploadConfig = require('./config/upload')
const uploadToS3 = require('./config/s3Upload')

// Creating instances
// Define middleware which allows us to route from different file
const routes = express.Router()
// Multer instance of our upload config to use functionality
// const upload = multer(uploadConfig)
// const uploadToS3

// Define routes using express' Router method
// Checking if app is running fine
routes.get('/status', (req, res)=> {
    res.send({ status: 200 })
})

// Event
// Event creation end point
routes.post('/event', verifyToken, uploadToS3.single("thumbnail") ,EventController.createEvent)
// Deleting event by ID
routes.delete('/event/:eventId', verifyToken, EventController.delete)

// User
// Registering 
routes.post('/user/register', UserController.createUser)
// Getting events by user ID
routes.get('/user/events', verifyToken, DashboardController.getEventsByUserId)
// Getting user By ID
routes.get('/user/:userId', UserController.getUserById)

// Dashboard
// Getting events with ID using function called getEventById from EventController
routes.get('/event/:eventId', verifyToken, DashboardController.getEventById)
// Getting all events
routes.get('/dashboard', verifyToken, DashboardController.getAllEvents)
// Getting events by category
routes.get('/dashboard/:category', verifyToken, DashboardController.getAllEvents)

// Login
routes.post('/login', LoginController.store)

// Registration
routes.post('/registration/:eventId', verifyToken, RegistrationController.createRegistration )
routes.get('/registration', verifyToken, RegistrationController.getMyRegistrations)
routes.get('/registration/:registrationId', RegistrationController.getRegistration)
// Approvals and Rejections
routes.post('/registration/:registrationId/approvals', verifyToken, ApprovalController.approval)
routes.post('/registration/:registrationId/rejections', verifyToken, RejectionController.rejection)

// TODO: Add JWT token to project (DONE)
// Return token when login (DONE)
// Send token on request (DONE)
// Create function to protect routes (DONE)
// Add function/middleware to routers
// Modify response to decode the token


// Export routes
module.exports = routes