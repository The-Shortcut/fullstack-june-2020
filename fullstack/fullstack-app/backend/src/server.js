// Importing required packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

// Importing required files
const routes = require('./routes')

const app = express() // Setup server for app requiring express
const server = http.Server(app)
const io = socketio(server)
const PORT = process.env.PORT || 8000


// Checking if in production or dev environment
if(process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}


// Connecting to MongoDB by reading .env file if in dev environment
try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully')
} catch(error) {
    console.log(error)
}
// Websocket
const connectedUsers = {} // Memory for server to store users
io.on('connection', socket => {
    console.log('User is connected with: ', socket.id)
    // console.log(socket.handshake.query)
    const { user } = socket.handshake.query
    connectedUsers[user] = socket.id
    
    io.emit('mojo', {data: 'hello-world'})
})

// app.use()
app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers
    return next()
})
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, "..", "files")))

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})