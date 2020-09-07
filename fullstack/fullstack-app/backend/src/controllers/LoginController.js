// Import required packages and models
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

// Export modules
module.exports = {
    async store(req, res) {
        // Grab email and password from request body
        const { email, password } = req.body

        try {
            // Check if both input fields have been filled
            if (!email || !password) {
                return res.status(200).json({
                    message: "Required field missing!"
                })
            }
    
            // Find the provided email in User database using findOne method
            const user = await User.findOne({ email })
 
            // CHeck if user exists. If not, ask to register as response
            if (!user) {
                return res.status(200).json({
                    message: 'User not found! Do you want to register?'
                })
            }
    
            // Check if user and password combo matches
            // Password from server will be hashed, so decrypt and compare
            if ( user && await bcrypt.compare(password, user.password) ) {
                const userResponse = {
                    _id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                } 
                return jwt.sign( {user: userResponse}, 'secret', (err, token) => {
                    return res.json({
                        user: token,
                        user_id: userResponse._id
                    })
                })

            } else {
                return res.status(200).json({
                    message: "Email or password does not match"
                })
            }

        } catch(error) {
            throw Error(`Error while authenticating a User ${error}`)
        }

    }
}