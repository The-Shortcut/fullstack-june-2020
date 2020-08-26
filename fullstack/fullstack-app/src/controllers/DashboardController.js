const Event = require('../models/Event')

module.exports = {
    async getEventById (req, res) {
        // Get eventId from request body
        const { eventId } = req.params
        
        try {
            // Find particular event with that Id
            // If event with that Id exists, return the event data as response     
            const event = await Event.findById(eventId)
            return res.json(event)
        } catch(error) {
            // If event doesn't exist, response message will say it doesn't exist
            return res.status(400).json({
                message: 'Event ID does not exist!'
            })
        }
    },

    async getAllEvents(req, res) {
        const { category } = req.params
        const query = { category } || {}

        try {
            const events = await Event.find(query)

            if(events) {
                return res.json(events)
            }
        } catch(error) {
            return res.status(400).json({
                message: " We do not have any events to show"
            })
        }
    },
}