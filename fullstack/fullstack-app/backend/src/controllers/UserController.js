// Importing required libraries and packages
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async createUser(req, res) {
        try {
            const { email, firstName, lastName, password } = req.body
            const existentUser = await User.findOne({email})

            if(!existentUser) {
                // Has encrypt password before creating user
                const hashedPassword = await bcrypt.hash(password, 10)
                const userResponse = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                })
                return jwt.sign( {user: userResponse}, 'secret', (err, token) => {
                    return res.json({
                        user: token,
                        user_id: userResponse._id
                    })
                })
            }
            return res.status(400).json({
                message: 'email/user already exists. Do you want to login instead?'
            })
        } catch (err) {

            throw Error(`Error while registering new user: ${err}`)
        }
    },

    async getUserById (req, res) {
        const { userId } = req.params
        
        try {
            const user = await User.findById(userId)
            return res.json(user)
        } catch(error) {
            return res.status(400).json({
                message: 'User ID does not exist. Do you want to register?'
            })
        }
    }
}