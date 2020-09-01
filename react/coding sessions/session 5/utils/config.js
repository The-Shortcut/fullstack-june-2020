require('dotenv').config()

let PORT = process.env.PORT
let mongoDB_URI = process.env.mongoDB_URI

module.exports = {
    PORT,
    mongoDB_URI
}