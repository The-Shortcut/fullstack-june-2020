// Import packages
const Event = require('../models/Event')
const User = require('../models/User')

module.exports = {
    // Get all event properties needed for event creation
    // Get user ID from where request is made. Usually found in reduest headers
    // Get the filename of thumbnail
    
    async createEvent(req, res) {
        const { title, description, price, category } = req.body
        const { user_id } = req.headers
        const { filename } = req.file

        const user = await User.findById(user_id)

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
            user: user_id,
            thumbnail: filename
        })

        return res.json(event)
    },

    async delete(req, res) {
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

}

