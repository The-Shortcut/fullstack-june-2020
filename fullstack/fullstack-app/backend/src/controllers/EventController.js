// Import packages
const Event = require('../models/Event')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
    // Get all event properties needed for event creation
    // Get user ID from where request is made. Usually found in reduest headers
    // Get the filename of thumbnail
    
    createEvent(req, res) {
        jwt.verify(req.token, 'secret', async(err, authData) => {
            if(err) {
                res.statusCode(401)
            } else {
                const { title, description, price, category, date } = req.body
                // const { user_id } = req.headers
                const { location } = req.file
        
                const user = await User.findById(authData.user._id)
        
                if(!user) {
                    return res.status(400).json({ message: 'User does not exist'})
                }
            // Define event
            // Create event based on Event model
        
                const event = await Event.create({
                    title,
                    description,
                    category,
                    price: parseFloat(price),
                    user: authData.user._id,
                    thumbnail: location,
                    date
                })      
                return res.json(event)
            }
        })
    },

    delete(req, res) {
        jwt.verify(req.token, 'secret', async(err) => {
            if(err) {
                res.statusCode(401)
            } else {
                const { eventId } = req.params
                try {
                    await Event.findByIdAndDelete(eventId)
                    return res.status(204).send()
                } catch(error) {
                    return res.status(400).json({
                        message: "We do not have any event with the ID"
                    })
                }
            }
        })
    }

}

