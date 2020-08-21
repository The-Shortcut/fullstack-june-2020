const User = require('../models/User')

module.exports = {
    async store(req, res) {
        try {
            const { email, firstName, lastName, password } = req.body

            const existentUser = await User.findOne({email})
            if(!existentUser) {
                const user = await User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
                return res.json(user)
            }
            return res.status(400).json({
                message: 'email/user already exists. Do you want to login instead?'
            })
        } catch (err) {

            throw Error(`Error while registering new user: ${err}`)
        }
    }
}