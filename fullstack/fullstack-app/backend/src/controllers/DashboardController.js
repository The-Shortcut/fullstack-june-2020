const Event = require('../models/Event')
const jwt = require('jsonwebtoken')

module.exports = {
    getEventById (req, res) {
        jwt.verify(req.token, 'secret', async(err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                // Get eventId from request body
                const { eventId } = req.params
                
                try {
                    // Find particular event with that Id
                    // If event with that Id exists, return the event data as response     
                    const event = await Event.findById(eventId)
                    return res.json({ authData, event})
                } catch(error) {
                    // If event doesn't exist, response message will say it doesn't exist
                    return res.status(400).json({
                        message: 'Event ID does not exist!'
                    })
                }
            }
        })
    },

    getAllEvents(req, res) {
        jwt.verify(req.token, 'secret', async(err, authData) => {
            if(err) {
                res.sendStatus(403)
            } else {
                const { category } = req.params
                const query = category ? { category } : {}
        
                console.log("token: ", req.token)
        
                try {
                    const events = await Event.find(query)
        
                    if(events) {
                        // return res.json(events)
                        return res.json({authData, events})
                    }
                } catch(error) {
                    return res.status(400).json({
                        message: " We do not have any events to show"
                    })
                }
            }
        })
    },

    getEventsByUserId(req, res) {
        jwt.verify(req.token, 'secret', async(err, authData) => {
            if(err) {
                res.sendStatus(403)
            } else {
                const { user_id } = req.headers
        
                try {
                    const events = await Event.find({user: authData.user._id})
                    if(events) {
                        return res.json({authData, events})
                    }
                } catch(error) {
                    return res.status(400).json({message: `There are no events by user ${user_id}`})
                }
            }
        })
    }
}