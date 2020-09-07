function verifyToken (req, res, next) {
    const bearerToken = req.header('user')

    if(typeof bearerToken !== 'undefined') {
        req.token = bearerToken
        next()
    } else {
        res.status(401)
    }
}

module.exports = verifyToken