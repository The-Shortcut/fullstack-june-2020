const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: String
})

module.exports = mongoose.model('Skill', skillSchema)