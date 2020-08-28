// Import required packages 
const express = require('express')
const multer = require('multer')

// Import controllers and config files
const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const DashboardController = require('./controllers/DashboardController')
const LoginController = require('./controllers/LoginController')
const RegistrationController = require('./controllers/RegistrationController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')
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
// Deleting event by ID
routes.delete('/event/:eventId', EventController.delete)

// User
// Registering 
routes.post('/user/register', UserController.createUser)
// Getting user By ID
routes.get('/user/:userId', UserController.getUserById)

// Dashboard
// Getting events with ID using function called getEventById from EventController
routes.get('/dashboard/:eventId', DashboardController.getEventById)
// Getting all events
routes.get('/dashboard', DashboardController.getAllEvents)
// Getting events by category
routes.get('/dashboard/:category', DashboardController.getAllEvents)

// Login
routes.post('/login', LoginController.store)

// Registration
routes.post('/registration/:eventId', RegistrationController.createRegistration )
routes.get('/registration/:registrationId', RegistrationController.getRegistration)
// Approvals and Rejections
routes.post('/registration/:registrationId/approvals', ApprovalController.approval)
routes.post('/registration/:registrationId/rejections', RejectionController.rejection)

// TODO: ApprovalController
// TODO: RejectionController


// Export routes
module.exports = routes